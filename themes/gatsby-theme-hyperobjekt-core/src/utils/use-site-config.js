import { useStaticQuery, graphql } from "gatsby"
export const useSiteConfig = () => {
  const { siteConfig } = useStaticQuery(
    graphql`
      query {
        siteConfig {
          contentPath
          assetPath
          displaySiteLogo
          displaySiteTitle
          displaySiteLogoMobile
          displaySiteTitleMobile
          invertSiteLogo
          mobileMenuBreakpoint
          useStickyHeader
          useSocialLinks
          useColorMode
          footerContentLocation
        }
      }
    `
  )
  return siteConfig
}
