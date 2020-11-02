import { withStyles } from "@material-ui/core"
import clsx from "clsx"
import React from "react"

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "stretch",
    minHeight: "100vh",
  },
})

const Page = ({ classes, className, children, ...props }) => {
  return (
    <div className={clsx("page", classes.root, className)} {...props}>
      {children}
    </div>
  )
}

export default withStyles(styles, { name: "HypPage" })(Page)
