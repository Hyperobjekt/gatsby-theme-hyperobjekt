import React from "react"
import mdxComponents from "./mdx"
import { SiteProvider } from "../utils/site-context"
import { MDXProvider } from "@mdx-js/react"

export default function Providers({ children }) {
  return (
    <SiteProvider>
      <MDXProvider components={mdxComponents}>{children}</MDXProvider>
    </SiteProvider>
  )
}
