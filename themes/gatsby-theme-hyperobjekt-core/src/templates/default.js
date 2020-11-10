import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        path
      }
      body
    }
  }
`

const DefaultTemplate = ({ data: { mdx }, pageContext }) => {
  const {
    title,
    description,
    keywords,
    image,
    lang,
    isBlogPost,
  } = pageContext.frontmatter
  return (
    <Layout
      {...{
        title,
        description,
        keywords,
        image,
        lang,
        isBlogPost,
      }}
    >
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default DefaultTemplate
