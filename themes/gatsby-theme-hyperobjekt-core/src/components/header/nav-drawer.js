import React from "react"
import { Drawer, withStyles } from "@material-ui/core"

const BaseNavDrawer = withStyles((theme) => ({
  paper: {
    minWidth: 280,
  },
}))(Drawer)

export default function NavDrawer(props) {
  return <BaseNavDrawer anchor="right" {...props} />
}
