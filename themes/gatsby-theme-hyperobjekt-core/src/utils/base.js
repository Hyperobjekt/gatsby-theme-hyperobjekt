import React from "react"
import { Typography } from "@material-ui/core"

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
