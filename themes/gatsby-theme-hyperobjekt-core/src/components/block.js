import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { withStyles } from "@material-ui/core"
import { useWindowSize } from "@hyperobjekt/hooks"

const styles = (theme) => ({
  /** Styles for the section root */
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: `${theme.spacing(6)}px 0`,
    [theme.breakpoints.up("sm")]: {
      padding: `${theme.spacing(8)}px 0`,
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
  const { width } = useWindowSize()
  const viewportWidth =
    document && document.body ? document.body.clientWidth : width
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
          ? `calc(-1 * (${viewportWidth}px - 100%) / 2)`
          : undefined,
        maxWidth: isFullWidth ? viewportWidth : undefined,
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
