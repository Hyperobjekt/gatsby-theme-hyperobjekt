const remarkSlug = require("remark-slug")
const remarkMath = require("remark-math")
const rehypeKatex = require("rehype-katex")
const withDefaults = require(`./src/utils/default-options`)

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions)
  const remarkImagesWidth =
    themeOptions.remarkImagesWidth == null
      ? 1440
      : parseInt(themeOptions.remarkImagesWidth)
  const gatsbyRemarkPlugins = [
    {
      resolve: `gatsby-remark-relative-images`,
      options: {},
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: remarkImagesWidth,
        linkImagesToOriginal: false,
        withWebp: true,
        backgroundColor: `transparent`,
      },
    },
    {
      resolve: `gatsby-remark-copy-linked-files`,
      options: {
        destinationDir: themeOptions.assetPath || `content/assets`,
      },
    },

    { resolve: `gatsby-remark-smartypants` },
    { resolve: `gatsby-remark-reading-time` },
    { resolve: `gatsby-remark-responsive-iframe` },
    { resolve: `gatsby-remark-external-links` },
  ]
  const remarkPlugins = [remarkSlug]
  const rehypePlugins = []

  if (themeOptions.useKatex) {
    gatsbyRemarkPlugins.push({
      resolve: `gatsby-remark-katex`,
    })
    remarkPlugins.push(remarkMath)
    rehypePlugins.push(rehypeKatex)
  }
  return {
    siteMetadata: {
      title: `Placeholder title`,
      description: `Placeholder description`,
      keywords: [`gatsby`],
      author: `Placeholder author`,
      siteUrl: `https://www.gatsbyjs.org`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
      menuLinks: [
        {
          name: `Placeholder Menu Link`,
          link: `/`,
          type: `internal`, //internal or anchor
        },
      ],
      socialLinks: [
        {
          name: `Placeholder social link`,
          link: `https://www.gatsbyjs.org`,
          location: `all`, //Options are "all", "header", "footer"
        },
      ],
      copyright: "Website copyright notice " + new Date().getFullYear(),
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: options.contentPath || `content/pages`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: options.assetPath || `content/assets`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.md`, `.mdx`],
          commonmark: true,
          defaultLayouts: {
            default: require.resolve("./src/templates/default.js"),
          },
          gatsbyRemarkPlugins: gatsbyRemarkPlugins,
          remarkPlugins: remarkPlugins,
          rehypePlugins: rehypePlugins,
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: remarkImagesWidth,
                linkImagesToOriginal: false,
                withWebp: true,
                backgroundColor: `transparent`,
              },
            },
          ],
        },
      },
      {
        resolve: `gatsby-theme-material-ui`,
        options: {
          webFontsConfig: { fonts: options.fonts },
        },
      },
      { resolve: `gatsby-plugin-mdx-embed` },
      { resolve: `gatsby-plugin-sitemap` },
      { resolve: `gatsby-plugin-robots-txt` },
      { resolve: `gatsby-plugin-react-helmet` },
      { resolve: `gatsby-transformer-sharp` },
      { resolve: `gatsby-transformer-yaml` },
      { resolve: `gatsby-transformer-json` },
      { resolve: `gatsby-plugin-sharp` },
      { resolve: `gatsby-plugin-catch-links` },
    ].filter(Boolean),
  }
}
