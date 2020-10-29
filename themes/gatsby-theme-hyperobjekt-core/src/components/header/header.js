// This is a placeholder for latent shadowing in sibling themes
import React, { useContext } from "react"
import { AppBar } from "@material-ui/core"
import Branding from "./branding"
import MobileMenu from "./menu-mobile"
import DesktopMenu from "./menu-desktop"
import HeaderBar from "./header-bar"
import { NavContext } from "../../utils/nav-context"
import { useSiteConfig } from "../../utils/use-site-config"

const SiteHeader = (props) => {
  const { useStickyHeader } = useSiteConfig()
  const { useMobileMenu } = useContext(NavContext)
  return (
    <AppBar position={useStickyHeader ? "sticky" : "static"} {...props}>
      <HeaderBar>
        <Branding />
        {useMobileMenu ? <MobileMenu /> : <DesktopMenu />}
      </HeaderBar>
    </AppBar>
  )
}

export default SiteHeader
