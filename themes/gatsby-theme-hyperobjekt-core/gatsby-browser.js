import React from "react"
import { SiteProvider } from "./src/utils/site-context"
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "./src/components/mdx"

export const wrapRootElement = ({ element }) => {
  return (
    <SiteProvider>
      <MDXProvider components={MDXComponents}>{element}</MDXProvider>
    </SiteProvider>
  )
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation !== null) {
    const skipLink = document.querySelector("#reach-skip-nav")
    if (skipLink) {
      skipLink.focus()
    }
  }
}
