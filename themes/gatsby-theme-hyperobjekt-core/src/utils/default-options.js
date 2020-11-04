module.exports = (themeOptions) => {
  const contentPath = themeOptions.contentPath || `content/pages`
  const assetPath = themeOptions.assetPath || `content/assets`
  const fonts = themeOptions.fonts || {
    google: [
      {
        family: `Montserrat`,
        variants: [`300`, `400`, `500`, `700`],
      },
      {
        family: `Nunito`,
        variants: [`300`, `400`, `500`],
      },
    ],
  }
  const header = {
    displaySiteLogo: true,
    displaySiteTitle: false,
    displaySiteLogoMobile: true,
    displaySiteTitleMobile: false,
    useStickyHeader: true,
    useShrinkHeader: true,
    mobileMenuBreakpoint: 768,
    headerContentMaxWidth: 960,
    headerHeight: 80,
    shrinkHeaderHeight: 56,
    shrinkOffset: -32,
  }
  const responsiveFontSizes = themeOptions.responsiveFontSizes || {
    breakpoints: ["sm", "md", "lg"],
    factor: 2,
  }
  return {
    contentPath,
    assetPath,
    header,
    fonts,
    responsiveFontSizes,
  }
}
