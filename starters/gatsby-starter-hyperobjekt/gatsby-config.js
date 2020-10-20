module.exports = {
  siteMetadata: {
    title: `Hyperobjekt`,
    description: `Speed up your GatsbyJS development workflow. Designed as a set of opinionated and advanced themes and starters using MDX and Theme-UI. Incorporates gatsby-theme-hyperobjekt-core.`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `Lane Olson`,
    siteUrl: `https://gatsby-starter-hyperobjekt.netlify.app`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Left Link`,
        link: `/page-1`,
        type: `internal`, //internal or anchor
        location: `left`,
      },
      {
        name: `Page 1`,
        link: `/page-1`,
        type: `internal`, //internal or anchor
        location: `right`,
      },
      {
        name: `Anchor 1`,
        link: `#anchor-1`,
        type: `anchor`, //internal or anchor
        location: `right`,
      },
      {
        name: `Page 2`,
        link: `/page-2`,
        type: `internal`, //internal or anchor
        location: `right`,
        subMenu: [
          {
            name: `Sub 1`,
            link: `/sub-1`,
            type: `internal`, //internal or anchor
          },
          {
            name: `Sub 2`,
            link: `/sub-2`,
            type: `internal`, //internal or anchor
          },
        ],
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `hyperobjekt@hyperobjekt.com`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://twitter.com/hyperobjekt`,
        location: `header`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/hyperobjekt`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-hyperobjekt-core`,
      options: {
        //Default options are:
        contentPath: `content/pages`,
        assetPath: `content/assets`,
        // displaySiteLogo: true,
        // displaySiteTitle: true,
        // displaySiteLogoMobile: true,
        // displaySiteTitleMobile: true,
        // invertLogo: false,
        // useStickyHeader: false,
        // useSocialLinks: true,
        // useColorMode: true,
        // useKatex: false,
        // footerContentLocation: "left", // "left", "right", "center"
        // remarkImagesWidth: 1440,
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
        icon: `content/assets/hyperobjekt-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
