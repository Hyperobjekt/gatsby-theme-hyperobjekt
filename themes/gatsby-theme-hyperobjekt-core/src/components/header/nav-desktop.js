import { withStyles } from "@material-ui/core"
import Navigation from "./nav"

const styles = (theme) => ({
  root: {},
  list: {
    display: "flex",
  },
  listItem: {
    "&:hover $subMenu, &:focus-within $subMenu": {
      pointerEvents: "all",
      opacity: 1,
    },
  },
  link: {
    color: theme.palette.primary.contrastText,
    whiteSpace: "nowrap",
    "&.active": {
      fontWeight: "bold",
    },
    "&:hover": {
      background: "rgba(255,255,255,0.04)",
    },
  },
  subMenu: {
    position: "absolute",
    top: "100%",
    left: "50%",
    minWidth: 200,
    opacity: 0,
    marginLeft: 0,
    transform: "translate3d(-50%, 0, 0)",
    pointerEvents: "none",
    background: theme.palette.primary.main,
    transition: `opacity ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
  },
  subMenuLink: {
    color: theme.palette.primary.contrastText,
    whiteSpace: "nowrap",
    "&:hover": {
      background: "rgba(255,255,255,0.04)",
    },
  },
})

export default withStyles(styles)(Navigation)
