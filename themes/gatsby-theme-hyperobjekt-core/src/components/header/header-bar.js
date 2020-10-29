import { Toolbar, withStyles } from "@material-ui/core"

const HeaderBar = withStyles((theme) => ({
  root: {
    alignItems: "stretch",
    justifyContent: "space-between",
  },
}))(Toolbar)

export default HeaderBar
