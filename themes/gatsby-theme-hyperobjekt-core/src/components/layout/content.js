import { withStyles } from "@material-ui/core"
import clsx from "clsx"
import React from "react"

const styles = (theme) => ({
  root: {
    maxWidth: theme.layout.contentWidth,
    padding: `0 ${theme.spacing(2)}px`,
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      padding: `0 ${theme.spacing(3)}px`,
    },
    "& > *:first-child:not(.block)": {
      marginTop: theme.spacing(6),
    },
  },
})

const Content = ({ classes, className, children, ...props }) => {
  return (
    <div className={clsx("content", classes.root, className)} {...props}>
      {children}
    </div>
  )
}

export default withStyles(styles, { name: "HypContent" })(Content)
