import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { Button, Typography, useTheme, withStyles } from "@material-ui/core"
import Block from "./block"

const styles = (theme) => ({
  root: {
    background: `linear-gradient(-18deg, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.light})`,
    boxShadow: `inset 0 0 48px 2px ${theme.palette.primary.light}`,
    color: theme.palette.primary.contrastText,
  },
  contentWrapper: {
    maxWidth: theme.layout.contentMaxWidth || 768,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
    },
  },
  primary: {
    marginTop: 0,
    textAlign: "center",
  },
  secondary: {
    textAlign: "center",
  },
  action: {
    color: theme.palette.primary.contrastText,
  },
})

const Hero = ({
  classes,
  className,
  primary,
  secondary,
  actionLabel,
  action,
  heightRatio = 1,
  children,
  ...props
}) => {
  const isActionUrl = actionLabel && typeof action === "string"
  const isActionFunction = actionLabel && typeof action === "function"
  const {
    layout: { headerHeight },
  } = useTheme()
  const primaryComponent =
    typeof primary === "string" ? (
      <Typography
        variant="h2"
        className={clsx("hero__primary", classes.primary)}
      >
        {primary}
      </Typography>
    ) : (
      primary
    )
  return (
    <Block
      className={clsx("hero", classes.root, className)}
      type="fullWidth"
      style={{
        minHeight: `calc((100vh * ${heightRatio}) - ${headerHeight}px)`,
      }}
      {...props}
    >
      <div className={clsx("hero__content-wrapper", classes.contentWrapper)}>
        {primary && primaryComponent}
        {secondary && (
          <Typography
            variant="body1"
            className={clsx("hero__secondary", classes.secondary)}
          >
            {secondary}
          </Typography>
        )}
        {isActionUrl && (
          <Button
            color="secondary"
            variant="contained"
            className={clsx("hero__action", classes.action)}
            component="a"
            href={action}
          >
            {actionLabel}
          </Button>
        )}
        {isActionFunction && (
          <Button
            className={clsx("hero__action", classes.action)}
            color="secondary"
            variant="contained"
            onClick={action}
          >
            {actionLabel}
          </Button>
        )}
      </div>
      {children}
    </Block>
  )
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  primary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  secondary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  actionLabel: PropTypes.string,
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  heightRatio: PropTypes.number,
}

export default withStyles(styles, { name: "HypHero" })(Hero)
