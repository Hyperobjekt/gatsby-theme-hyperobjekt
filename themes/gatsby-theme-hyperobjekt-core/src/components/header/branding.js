import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby-theme-material-ui"
import { useSiteConfig } from "../../utils/use-site-config"
import { useSiteMetadata } from "../../utils/use-site-metadata"
import clsx from "clsx"
import { Typography, useTheme, withStyles } from "@material-ui/core"
import useWindowSize from "../../utils/use-window-size"

const styles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: theme.typography.pxToRem(24),
  },
  logo: {
    width: 150,
    height: 20,
  },
})

const LogoImage = ({ logo, title, ...props }) => {
  return typeof logo === "string" ? (
    <img src={logo} alt={title} {...props} />
  ) : (
    <Img
      fluid={logo}
      alt={title}
      imgStyle={{ objectFit: "contain" }}
      {...props}
    />
  )
}

const Branding = ({ classes, className, ...props }) => {
  const { logo, title } = useSiteMetadata()
  const {
    header: {
      displaySiteLogo,
      displaySiteLogoMobile,
      displaySiteTitle,
      displaySiteTitleMobile,
    },
  } = useSiteConfig()
  const theme = useTheme()
  const { width } = useWindowSize()
  const isMobile = width < theme.breakpoints.values["sm"]
  const showLogo =
    logo &&
    ((isMobile && displaySiteLogoMobile) || (!isMobile && displaySiteLogo))
  const showTitle =
    (isMobile && displaySiteTitleMobile) || (!isMobile && displaySiteTitle)
  return (
    <Link
      to="/"
      className={clsx("branding", classes.root, className)}
      {...props}
    >
      {showLogo && (
        <LogoImage
          logo={logo}
          title={title}
          className={clsx("branding__logo", classes.logo)}
        />
      )}
      {showTitle && (
        <Typography
          className={clsx("branding__title", classes.title)}
          variant="h1"
        >
          {title}
        </Typography>
      )}
    </Link>
  )
}

export default withStyles(styles, { name: "HypBranding" })(Branding)
