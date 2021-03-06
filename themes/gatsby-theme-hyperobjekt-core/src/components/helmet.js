import React from "react"
import PropTypes from "prop-types"
import { Helmet as ReactHelmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useSiteConfig } from "../utils/use-site-config"
import { useSiteMetadata } from "../utils/use-site-metadata"

const Helmet = ({
  description: propDescription,
  lang,
  meta,
  location: propLocation,
  keywords: propKeywords,
  title: propTitle,
  image: propImage,
  isBlogPost,
  children,
}) => {
  const {
    title,
    description,
    keywords,
    twitterUsername,
    siteUrl,
    seoImage,
  } = useSiteMetadata()
  const { useKatex, typekitId } = useSiteConfig()
  const location = useLocation()
  const seoTitle = propTitle || title
  const seoDescription = propDescription || description
  const seoKeywords = propKeywords || keywords
  const seoImg = propImage || seoImage
  const seoImgSrc = `${siteUrl}${seoImg}`
  const seoCanononical = propLocation || location.pathname
  return (
    <ReactHelmet
      htmlAttributes={{
        lang,
      }}
      title={seoTitle}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `viewport`,
          content: `minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no`,
        },
        {
          name: `description`,
          content: seoDescription,
        },
        {
          name: `image`,
          content: seoImgSrc,
        },

        //Open Graph
        {
          property: `og:title`,
          content: seoTitle,
        },
        {
          property: `og:description`,
          content: seoDescription,
        },
        {
          property: `og:type`,
          content: isBlogPost ? `article` : `website`,
        },
        {
          property: `og:image`,
          content: seoImgSrc,
        },
        {
          property: `og:image:alt`,
          content: seoTitle,
        },
        { property: `og:image:width`, content: seoImage.width },
        { property: `og:image:height`, content: seoImage.height },

        // Twitter
        {
          name: `twitter:title`,
          content: seoTitle,
        },
        {
          name: `twitter:description`,
          content: seoDescription,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:site`,
          content: twitterUsername,
        },
        {
          name: `twitter:image`,
          content: seoImgSrc,
        },
        {
          name: `twitter:image:alt`,
          content: seoTitle,
        },
      ]
        .concat(
          seoKeywords.length > 0
            ? {
                name: `keywords`,
                content: seoKeywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <link rel="canonical" href={`${siteUrl}${seoCanononical}`} />
      {useKatex && (
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossorigin="anonymous"
        />
      )}
      {typekitId && (
        <link
          rel="stylesheet"
          href={`https://use.typekit.net/${typekitId}.css`}
        ></link>
      )}
      {children}
    </ReactHelmet>
  )
}

Helmet.defaultProps = {
  lang: `en`,
  meta: [],
  isBlogPost: false,
}

Helmet.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  isBlogPost: PropTypes.bool,
}

export default Helmet
