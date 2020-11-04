const { createContentDigest } = require(`gatsby-core-utils`)
const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const withDefaults = require(`./src/utils/default-options`)
const Debug = require(`debug`)
const debug = Debug(`gatsby-theme-blog-core`)

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()
  const { contentPath, assetPath } = withDefaults(themeOptions)

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
  ]

  dirs.forEach((dir) => {
    debug(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

//Schema generation for Hyperobjekt Config and Submenu

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions
  // Create a default empty array
  createFieldExtension({
    name: `defaultSubMenu`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return []
          }
          return source[info.fieldName]
        },
      }
    },
  })

  createFieldExtension({
    name: `defaultAllLocation`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return "all"
          }
          return source[info.fieldName]
        },
      }
    },
  })

  // Type defination for the submenu to ensure there is always a submenu array to query
  const subMenuTypeDefs = `
    type Site implements Node @infer {
      siteMetadata: SiteMetadata
    }
    type SiteMetadata {
      menuLinks: [MenuLinks]
    }
    type MenuLinks {
      name: String!
      link: String!
      type: String!
      location: String! @defaultAllLocation
      subMenu: [SubMenu] @defaultSubMenu
    }
    type SubMenu {
      name: String
      link: String
      type: String
    }
  `
  // Type definition for Hyperobjekt Config
  const siteConfigTypeDef = `
  type siteConfig implements Node {
    contentPath: String!
    assetPath: String!
    header: HeaderOptions!
    useSocialLinks: Boolean!
    useDarkMode: Boolean!
    useKatex: Boolean!
    contentMaxWidth: Int!
    responsiveFontSizes: ResponsiveFontSizes
  }
  type HeaderOptions {
    displaySiteLogo: Boolean!
    displaySiteTitle: Boolean!
    displaySiteLogoMobile: Boolean!
    displaySiteTitleMobile: Boolean!
    useStickyHeader: Boolean!
    useShrinkHeader: Boolean!
    mobileMenuBreakpoint: Int!
    headerContentMaxWidth: Int!
    headerHeight: Int!
    shrinkHeaderHeight: Int!
    shrinkOffset: Int!
  }
  type ResponsiveFontSizes {
    breakpoints: [String],
    factor: Int!
  }
  `
  createTypes(subMenuTypeDefs)
  createTypes(siteConfigTypeDef)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  {
    contentPath = "content/pages",
    assetPath = "content/assets",
    header = {
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
    },
    useSocialLinks = true,
    useDarkMode = true,
    useKatex = false,
    contentMaxWidth = 768,
    responsiveFontSizes = {
      breakpoints: ["sm", "md", "lg"],
      factor: 2,
    },
  }
) => {
  // create garden data from plugin config
  const siteConfigFieldData = {
    contentPath,
    assetPath,
    header,
    useSocialLinks,
    useDarkMode,
    useKatex,
    contentMaxWidth,
    responsiveFontSizes,
  }
  createNode({
    ...siteConfigFieldData,
    id: `gatsby-theme-site-config`,
    parent: null,
    children: [],
    internal: {
      type: `SiteConfig`,
      contentDigest: createContentDigest(siteConfigFieldData),
      content: JSON.stringify(siteConfigFieldData),
      description: `Site Config`,
    },
  })
}
