import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useSiteConfig } from "../../utils/use-site-config"
import { SiteContext } from "../../utils/site-context"
import DarkModeToggle from "./dark-mode-toggle"
import MobileNavigation from "./nav-mobile"
import clsx from "clsx"
import { withStyles } from "@material-ui/core"
const styles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  darkModeToggle: {
    color: theme.palette.primary.contrastText,
  },
})

const NavIcons = ({ classes, className, ...props }) => {
  const { useDarkMode } = useSiteConfig()
  const { useMobileMenu } = useContext(SiteContext)
  return (
    <div className={clsx("nav__icons", classes.root, className)} {...props}>
      {useDarkMode && <DarkModeToggle className={classes.darkModeToggle} />}
      {useMobileMenu && <MobileNavigation />}
    </div>
  )
}

NavIcons.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles)(NavIcons)
