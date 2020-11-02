import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        logo: file(name: { eq: "site-logo" }) {
          childImageSharp {
            fluid(maxHeight: 512) {
              ...GatsbyImageSharpFluid
            }
          }
          extension
          publicURL
        }
        seoImage: file(name: { eq: "site-social" }) {
          childImageSharp {
            resize(width: 1024) {
              src
              width
              height
            }
          }
        }
        site {
          siteMetadata {
            title
            description
            keywords
            author
            siteUrl
            menuLinks {
              name
              link
              type
              location
              subMenu {
                link
                name
                type
              }
            }
            socialLinks {
              name
              link
              location
            }
            copyright
          }
        }
      }
    `
  )
  const { logo } = data
  const logoImage = logo
    ? !logo.childImageSharp && logo.extension === "svg"
      ? data.logo.publicURL // svg logo, return public url
      : data.logo.childImageSharp.fluid // png / jpg logo, return base64 output for gatsby-image
    : null // no logo
  const seoImage = data.seoImage.childImageSharp.resize
  const metaData = data.site.siteMetadata
  const twitterLink = data.site.siteMetadata.socialLinks
    .filter((social) => social.name.toLowerCase() === "twitter")
    .map((social) => {
      return social.link
    })
  const twitterUsername = twitterLink.length
    ? twitterLink[0]
        .toString()
        .toLowerCase()
        .replace("https://www.twitter.com/" && "https://twitter.com/", "@")
    : "Unknown"

  const allData = { ...metaData, logo: logoImage, seoImage, twitterUsername }
  return allData
}
