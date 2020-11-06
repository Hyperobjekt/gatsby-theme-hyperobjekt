import React, { useContext } from "react"
import { IconButton, withStyles } from "@material-ui/core"
import { SiteContext } from "../../utils/site-context"
import Navigation from "./nav"
import Drawer from "../drawer"
import icons from "../../icons"
import { headerLinkFilter } from "./header"
import clsx from "clsx"

const styles = (theme) => ({
  button: {},
  drawer: {},
  nav: {},
})

const MenuCollapsed = ({ classes, className, ...props }) => {
  const { isNavOpen, setIsNavOpen } = useContext(SiteContext)
  const MenuIcon = icons["menu"]

  function handleMenuOpen() {
    setIsNavOpen(true)
  }

  function handleMenuClose() {
    setIsNavOpen(false)
  }

  return (
    <React.Fragment>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuOpen}
        className={clsx(classes.button, className)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={clsx(classes.drawer)}
        open={isNavOpen}
        onClose={handleMenuClose}
      >
        <Navigation
          className={clsx("nav--mobile", classes.nav)}
          filter={headerLinkFilter}
          onSelect={handleMenuClose}
          subMenu
        />
      </Drawer>
    </React.Fragment>
  )
}

MenuCollapsed.propTypes = {}

export default withStyles(styles, { name: "HypMobileNavigation" })(
  MenuCollapsed
)
