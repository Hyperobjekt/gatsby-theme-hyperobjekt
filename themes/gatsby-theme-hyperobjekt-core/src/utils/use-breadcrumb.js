import { useSiteMetadata } from "./use-site-metadata"
import { useLocation } from "@reach/router"

/**
 * Checks if a link from the menu matches the provided path / hash
 * @param {*} link
 * @param {*} pathname
 * @param {*} hash
 */
const isLinkMatch = (link, pathname, hash) => {
  var isHashLink = link.indexOf("#") > -1
  if (isHashLink) {
    // matched if link matches the current path + hash
    return link === pathname + hash
  }
  // matched if link is contained within the pathname
  return pathname.indexOf(link) > -1
}

/**
 * Gets a breadcrumb trail to the current page
 * TODO: could be recursive so it looks deeper than 2 levels
 * @param {*} links
 * @param {*} pathname
 */
const getBreadcrumb = (links, pathname, hash) => {
  for (let i = 0; i < links.length; i++) {
    const l = links[i]
    // first, check if any submenu items match
    if (l.subMenu?.length > 0) {
      const subLink = l.subMenu.find((sl) =>
        isLinkMatch(sl.link, pathname, hash)
      )
      if (subLink) return [l, subLink]
    }
    // skip check on "/" or "#" links
    if (l.link.length === 1) continue
    // no submenu matches, check if the link is contained within the pathname
    if (isLinkMatch(l.link, pathname, hash)) return [l]
  }
  return []
}

export default function useBreadcrumb() {
  const { menuLinks } = useSiteMetadata()
  const { pathname, hash } = useLocation()
  return getBreadcrumb(menuLinks, pathname, hash)
}
