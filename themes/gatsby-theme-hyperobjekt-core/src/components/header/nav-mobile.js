import React, { useContext } from "react"
import { IconButton } from "@material-ui/core"
import { MenuIcon } from "./menu-icon"
import { SiteContext } from "../../utils/site-context"
import Navigation from "./nav"
import NavDrawer from "./nav-drawer"

const MenuCollapsed = (props) => {
  const { isNavOpen, setIsNavOpen } = useContext(SiteContext)

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
      >
        <MenuIcon />
      </IconButton>
      <NavDrawer open={isNavOpen} onClose={handleMenuClose}>
        <Navigation />
      </NavDrawer>
    </React.Fragment>
  )
}

MenuCollapsed.propTypes = {}

export default MenuCollapsed
