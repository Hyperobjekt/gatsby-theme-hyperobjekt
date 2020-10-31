// This is a placeholder for latent shadowing in sibling themes
import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import { AppBar, useTheme, withStyles } from "@material-ui/core"
import Branding from "./branding"
import DesktopNavigation from "./nav-desktop"
import NavigationIcons from "./nav-icons"
import HeaderBar from "./header-bar"
import { SiteContext } from "../../utils/site-context"
import { useSiteConfig } from "../../utils/use-site-config"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import clsx from "clsx"

export const styles = (theme) => ({
  /* Styles applied to the root element. */
  appBar: {
    background: theme.palette.primary.main,
    transition: `height ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
  },
  /* Styles applied to the toolbar component. */
  headerBar: {},
  /* Styles applied to the branding component */
  branding: {
    color: theme.palette.primary.contrastText,
    marginRight: "auto",
  },
  title: {},
  logo: {},
})

const SiteHeader = ({ classes, ...props }) => {
  // state indicating whether header is condensed
  const [shrink, setShrink] = useState(false)
  const { useStickyHeader, useShrinkHeader, useDarkMode } = useSiteConfig()
  const { useMobileMenu } = useContext(SiteContext)
  const {
    layout: { headerHeight, shrinkHeaderHeight, shrinkOffset },
  } = useTheme()

  useScrollPosition(({ prevPos, currPos }) => {
    // ignore scroll position if no scroll shrink
    if (!useShrinkHeader || (!shrinkOffset && shrinkOffset !== 0)) return
    // check if conditions are met and shrink header
    currPos.y > shrinkOffset && shrink && setShrink(false)
    currPos.y < shrinkOffset && !shrink && setShrink(true)
  })

  return (
    <AppBar
      className={clsx("header", classes.appBar)}
      position={useStickyHeader ? "sticky" : "static"}
      style={{ height: shrink ? shrinkHeaderHeight : headerHeight }}
      {...props}
    >
      <HeaderBar className={clsx("header__toolbar", classes.headerBar)}>
        <Branding
          classes={{
            root: clsx("header__branding", classes.branding),
            title: classes.title,
            logo: classes.logo,
          }}
        />
        {!useMobileMenu && <DesktopNavigation />}
        <NavigationIcons />
      </HeaderBar>
    </AppBar>
  )
}

SiteHeader.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SiteHeader)
