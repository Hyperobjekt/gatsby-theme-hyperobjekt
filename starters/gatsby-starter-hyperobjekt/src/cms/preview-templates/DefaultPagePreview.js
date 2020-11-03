import React from "react"
import PropTypes from "prop-types"
import { Layout } from "gatsby-theme-hyperobjekt-core"

const DefaultPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()
  console.log("cms data", data)
  if (data) {
    return <Layout>{widgetFor("body")}</Layout>
  } else {
    return <div>Loading...</div>
  }
}

export default DefaultPagePreview
