import { useStaticQuery, graphql } from "gatsby"
export const usePageFrontmatter = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx {
          edges {
            node {
              frontmatter {
                title
              }
              headings {
                depth
                value
              }
              slug
              timeToRead
            }
          }
          pageInfo {
            currentPage
          }
        }
      }
    `
  )
  return data
}
