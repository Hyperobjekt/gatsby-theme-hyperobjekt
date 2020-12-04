import { withStyles } from "@material-ui/core"
import clsx from "clsx"
import React from "react"

const styles = (theme) => ({
  root: {
    maxWidth: theme.layout.contentMaxWidth,
    padding: theme.spacing(0, 2),
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 3),
    },
    // add some margins to the first element if it's not a block
    "& > *:first-child:not(.block)": {
      marginTop: theme.spacing(6),
    },
    // no bottom spacing on last block in content
    "& > .block:last-child": {
      paddingBottom: 0,
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
