import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { IconButton, withStyles } from "@material-ui/core"
import socialIcons from "./social-icons"

const styles = (theme) => ({
  root: {},
})

const SocialLink = ({ name, hint, link, classes, className, ...props }) => {
  const key = name.toLowerCase()
  const Icon = socialIcons[key] || socialIcons["default"]
  const shareLink = key === "email" ? "mailto:" + link : link
  const Button = () => (
    <IconButton
      component="a"
      className={clsx("social__link", classes.root, className)}
      href={shareLink}
      aria-label={name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
    </IconButton>
  )
  return <Button />
}

SocialLink.propTypes = {
  name: PropTypes.string,
  hint: PropTypes.string,
  link: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles)(SocialLink)
