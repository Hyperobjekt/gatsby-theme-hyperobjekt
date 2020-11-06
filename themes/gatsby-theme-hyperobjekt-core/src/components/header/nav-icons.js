import React from "react"
import PropTypes from "prop-types"
import { useSiteConfig } from "../../utils/use-site-config"
import DarkModeToggle from "./dark-mode-toggle"
import clsx from "clsx"
import SocialLinks from "../social/social-links"

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
  return (
    <div className={clsx("nav__icons", classes.root, className)} {...props}>
      {useDarkMode && (
        <DarkModeToggle
          aria-label="toggle dark mode"
          className={classes.darkModeToggle}
        />
      )}
      <SocialLinks location="header" {...props} />
    </div>
  )
}

NavIcons.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles)(NavIcons)
