import { Toolbar, withStyles } from "@material-ui/core"

const styles = {
  root: {
    alignItems: "stretch",
    justifyContent: "space-between",
    flex: 1,
    minHeight: 44,
  },
}

export default withStyles(styles)(Toolbar)
