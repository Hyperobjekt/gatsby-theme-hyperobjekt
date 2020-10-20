import { useStaticQuery, graphql } from "gatsby"
export const useHyperobjektConfig = () => {
  const { hyperobjektConfig } = useStaticQuery(
    graphql`
      query {
        hyperobjektConfig {
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
  return hyperobjektConfig
}
