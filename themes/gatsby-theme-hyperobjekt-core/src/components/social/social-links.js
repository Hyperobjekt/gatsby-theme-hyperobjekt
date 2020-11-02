import React from "react"
import PropTypes from "prop-types"
import { useSiteConfig } from "../../utils/use-site-config"
import { useSiteMetadata } from "../../utils/use-site-metadata"
import SocialLink from "./social-link"
import clsx from "clsx"
import { withStyles } from "@material-ui/core"

const styles = (theme) => ({
  root: {},
  link: {
    color: theme.palette.primary.contrastText,
  },
})

const SocialLinks = ({ location = "header", className, classes, ...props }) => {
  const { socialLinks } = useSiteMetadata()
  const { useSocialLinks } = useSiteConfig()
  if (useSocialLinks === false) {
    return null
  }
  return (
    <div className={clsx("social", classes.root, className)}>
      {socialLinks
        .filter(
          (platform) =>
            ["all", location].indexOf(platform.location.toLowerCase()) > -1
        )
        .map((platform) => (
          <SocialLink
            key={platform.name}
            name={platform.name}
            link={platform.link}
            className={classes.link}
          />
        ))}
    </div>
  )
}

SocialLinks.propTypes = {
  location: PropTypes.string,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export const SocialHeader = (props) => (
  <SocialLinks location="header" {...props} />
)

export default withStyles(styles)(SocialLinks)
