import React from "react"
import { SiteProvider } from "./src/utils/site-context"
import { MDXProvider } from "@mdx-js/react"
import SEO from "./src/utils/seo"
import {
  Button,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
} from "@material-ui/core"

import { H1, H2, H3, H4, H5, H6, Paragraph } from "./src/utils/base"

export const wrapRootElement = ({ element }) => {
  return (
    <SiteProvider>
      <MDXProvider
        components={{
          SEO,
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          h5: H5,
          h6: H6,
          p: Paragraph,
          ul: List,
          li: ListItem,
          ol: (props) => <List component="ol" {...props} />,
          table: Table,
          thead: TableHead,
          tbody: TableBody,
          tr: TableRow,
          td: TableCell,
          th: TableCell,
          button: Button,
          a: Link,
        }}
      >
        {element}
      </MDXProvider>
    </SiteProvider>
  )
}
