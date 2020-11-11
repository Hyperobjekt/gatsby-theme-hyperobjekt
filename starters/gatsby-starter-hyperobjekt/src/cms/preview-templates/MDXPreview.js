import React from "react"
import PropTypes from "prop-types"
import MDX from "mdx-scoped-runtime"
import { mdxComponents } from "gatsby-theme-hyperobjekt-core"
import Colors from "../../components/colors"
const MDXPreview = ({ entry }) => {
  const { Hero, Helmet, ...components } = mdxComponents
  return (
    <MDX components={components} scope={{ Hero, Helmet, Colors }}>
      {entry.getIn(["data", "body"])}
    </MDX>
  )
}

MDXPreview.propTypes = {
  entry: PropTypes.object.isRequired,
}

export default MDXPreview
