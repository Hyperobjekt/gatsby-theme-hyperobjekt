import { useStaticQuery, graphql } from "gatsby"
export const useSiteConfig = () => {
  const config = useStaticQuery(
    graphql`
      query {
        siteConfig {
          contentPath
          assetPath
          header {
            displaySiteLogo
            displaySiteTitle
            displaySiteLogoMobile
            displaySiteTitleMobile
            useStickyHeader
            useShrinkHeader
            mobileMenuBreakpoint
            headerContentMaxWidth
            headerHeight
            shrinkHeaderHeight
            shrinkOffset
          }
          useSocialLinks
          useDarkMode
          useKatex
          typekitId
          contentMaxWidth
          responsiveFontSizes {
            breakpoints
            factor
          }
        }
      }
    `
  )
  return config.siteConfig
}
