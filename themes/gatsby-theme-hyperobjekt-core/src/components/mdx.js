import React from "react"
import {
  Typography,
  Button,
  Link,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core"
import Hero from "./hero"
import SEO from "./seo"
import Block from "./block"
import CodeBlock from "./code-block"
export const H1 = ({ children, ...props }) => (
  <Typography gutterBottom variant="h1" {...props}>
    {children}
  </Typography>
)
export const H2 = ({ children, ...props }) => (
  <Typography gutterBottom variant="h2" {...props}>
    {children}
  </Typography>
)
export const H3 = ({ children, ...props }) => (
  <Typography gutterBottom variant="h4" {...props}>
    {children}
  </Typography>
)
export const H4 = ({ children, ...props }) => (
  <Typography gutterBottom variant="h5" {...props}>
    {children}
  </Typography>
)
export const H5 = ({ children, ...props }) => (
  <Typography gutterBottom variant="h5" {...props}>
    {children}
  </Typography>
)
export const H6 = ({ children, ...props }) => (
  <Typography gutterBottom variant="h6" {...props}>
    {children}
  </Typography>
)
export const Paragraph = ({ children, ...props }) => (
  <Typography gutterBottom variant="body1" paragraph={true} {...props}>
    {children}
  </Typography>
)

export const BulletList = withStyles(
  (theme) => ({
    root: {
      listStyleType: "disc",
      paddingLeft: theme.spacing(2),
      "& > li": {
        display: "list-item",
      },
    },
  }),
  { name: "HypBulletList" }
)(List)

export const OrderedList = withStyles(
  (theme) => ({
    root: {
      listStyleType: "decimal",
      paddingLeft: theme.spacing(2),
      "& > li": {
        display: "list-item",
      },
    },
  }),
  { name: "HypOrderedList" }
)(List)

export default {
  SEO,
  Hero,
  section: Block,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  ul: BulletList,
  li: ListItem,
  ol: (props) => <OrderedList component="ol" {...props} />,
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  td: TableCell,
  th: TableCell,
  button: Button,
  a: Link,
  pre: CodeBlock,
}
