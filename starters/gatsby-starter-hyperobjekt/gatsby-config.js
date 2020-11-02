const metadata = require("./config/metadata.json")

module.exports = {
  siteMetadata: metadata,
  plugins: [
    {
      resolve: `gatsby-theme-hyperobjekt-core`,
      options: {
        contentPath: `content/pages`,
        assetPath: `content/assets`,
        // displaySiteLogo: true,
        displaySiteTitle: false,
        // displaySiteLogoMobile: true,
        displaySiteTitleMobile: false,
        // invertLogo: false,
        useStickyHeader: true,
        useShrinkHeader: true,
        // useSocialLinks: true,
        // useDarkMode: true,
        // useKatex: false,
        // footerContentLocation: "left", // "left", "right", "center"
        // remarkImagesWidth: 1440,
        // mobileMenuBreakpoint: 768,
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`, `400`, `500`],
              },
              {
                family: `Nunito`,
                variants: [`300`, `400`, `500`],
              },
              {
                family: "Fira Mono",
                variants: [`400`],
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-hyperobjekt`,
        short_name: `hyperobjekt`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `./src/cms/cms.js`,
      },
    },
  ],
}
