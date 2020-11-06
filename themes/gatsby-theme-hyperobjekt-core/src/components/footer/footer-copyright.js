import React from "react"
import PropTypes from "prop-types"
import { Typography, withStyles } from "@material-ui/core"
import { useSiteMetadata } from "../../utils/use-site-metadata"
import clsx from "clsx"

const styles = (theme) => ({
  root: {},
})

const FooterCopyright = ({ classes, className, ...props }) => {
  const { copyright } = useSiteMetadata()
  return (
    <Typography
      variant="body1"
      className={clsx("footer__copyright", className)}
      classes={classes}
      {...props}
    >
      {copyright}
    </Typography>
  )
}

FooterCopyright.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles, { name: "HypFooterCopyright" })(
  FooterCopyright
)
