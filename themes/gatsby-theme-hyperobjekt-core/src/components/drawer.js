import React from "react"
import { Drawer as MuiDrawer, IconButton, withStyles } from "@material-ui/core"
import icons from "../icons"
import clsx from "clsx"
const styles = (theme) => ({
  /** Root paper styles for the drawer */
  root: {
    minWidth: 280,
  },
  /** Drawer content wrapper styles */
  content: {
    marginTop: theme.spacing(5),
  },
  /** Close button styles */
  close: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
})

function Drawer({ classes, className, onClose, children, ...props }) {
  const CloseIcon = icons["close"]
  return (
    <MuiDrawer
      className={clsx("drawer")}
      classes={{ paper: classes.root }}
      onClose={onClose}
      anchor="right"
      {...props}
    >
      <IconButton
        className={clsx("drawer__close", classes.close)}
        aria-label="close"
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      <div className={clsx("drawer__content", classes.content)}>{children}</div>
    </MuiDrawer>
  )
}

export default withStyles(styles, { name: "HypDrawer" })(Drawer)
