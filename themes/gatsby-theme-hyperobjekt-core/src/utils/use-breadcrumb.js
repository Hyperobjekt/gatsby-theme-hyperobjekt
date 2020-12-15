import { useSiteMetadata } from "./use-site-metadata"
import { useLocation } from "@reach/router"

/**
 * Gets a breadcrumb trail to the current page
 * TODO: could be recursive so it looks deeper than 2 levels
 * @param {*} links
 * @param {*} pathname
 */
const getBreadcrumb = (links, pathname) => {
  for (let i = 0; i < links.length; i++) {
    const l = links[i]
    const isMatch = l.link === pathname
    if (isMatch) return [l]
    if (l.subMenu.length === 0) continue
    const subLink = l.subMenu.find((l) => l.link === pathname)
    if (subLink) return [l, subLink]
  }
  return []
}

export default function useBreadcrumb() {
  const { menuLinks } = useSiteMetadata()
  const location = useLocation()
  return getBreadcrumb(menuLinks, location.pathname + location.hash)
}
