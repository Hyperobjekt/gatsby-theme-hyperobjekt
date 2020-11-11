import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { Layout, Hero, Block } from "gatsby-theme-hyperobjekt-core"
import { graphql } from "gatsby"

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        path
        hero {
          title
          description
          action
          link
        }
      }
      body
    }
  }
`

const HomeTemplate = ({ data: { mdx }, pageContext }) => {
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
      <Hero
        primary={mdx.frontmatter.hero.title}
        secondary={mdx.frontmatter.hero.description}
        actionLabel={mdx.frontmatter.hero.action}
        action={mdx.frontmatter.hero.link}
        heightRatio={0.8}
      />
      <Block>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Block>
    </Layout>
  )
}

export default HomeTemplate
