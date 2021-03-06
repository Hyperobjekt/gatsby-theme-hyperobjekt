import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { withStyles } from "@material-ui/core"
import useWindowSize from "../utils/use-window-size"

const styles = (theme) => ({
  /** Styles for the section root */
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(6, 0),
    "& > .MuiTypography-root": {
      marginTop: 0,
    },
  },
  /** Styles applied when the section is full width */
  fullWidth: {
    left: "calc(-1 * (100vw - 100%) / 2)",
    width: "100vw",
  },
})

const Block = ({
  classes,
  className,
  type = "default",
  component: Component = "section",
  style: overrideStyle,
  ...props
}) => {
  const isFullWidth = type === "fullWidth"
  const { clientWidth } = useWindowSize()
  return (
    <Component
      className={clsx(
        "block",
        classes.root,
        {
          "block--full-width": isFullWidth,
          [classes.fullWidth]: isFullWidth,
        },
        className
      )}
      style={{
        left: isFullWidth
          ? `calc(-1 * (${clientWidth}px - 100%) / 2)`
          : undefined,
        maxWidth: isFullWidth ? clientWidth : undefined,
        ...overrideStyle,
      }}
      {...props}
    ></Component>
  )
}

Block.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["default", "fullWidth"]),
  component: PropTypes.element,
}

export default withStyles(styles, { name: "HypBlock" })(Block)
