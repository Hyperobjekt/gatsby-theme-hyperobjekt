import { withStyles } from "@material-ui/core"
import clsx from "clsx"
import React from "react"

const styles = (theme) => ({
  root: {
    flex: 1,
  },
})

const Main = ({ classes, className, children, ...props }) => {
  return (
    <main className={clsx("main", classes.root, className)} {...props}>
      {children}
    </main>
  )
}

export default withStyles(styles, { name: "HypMain" })(Main)
