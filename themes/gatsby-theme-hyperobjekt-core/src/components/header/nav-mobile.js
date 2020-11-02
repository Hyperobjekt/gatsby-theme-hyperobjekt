import React, { useContext } from "react"
import { IconButton } from "@material-ui/core"
import { SiteContext } from "../../utils/site-context"
import Navigation from "./nav"
import Drawer from "../drawer"
import icons from "../../icons"
import { headerLinkFilter } from "./header"

const MenuCollapsed = (props) => {
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
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={isNavOpen} onClose={handleMenuClose}>
        <Navigation filter={headerLinkFilter} subMenu />
      </Drawer>
    </React.Fragment>
  )
}

MenuCollapsed.propTypes = {}

export default MenuCollapsed
