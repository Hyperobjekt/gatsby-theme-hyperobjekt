import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

import { withStyles } from "@material-ui/core"
import Navigation from "../header/nav"
const styles = (theme) => {
  return {
    root: {},
    list: {
      padding: 0,
    },
    listItem: {
      position: "relative",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: 0,
    },
    link: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(2),
    },
  }
}

const FooterNav = ({ className, ...props }) => {
  const filterLinks = (link) =>
    link.location === "all" || link.location === "footer"
  return (
    <Navigation
      className={clsx("footer__nav", className)}
      filter={filterLinks}
      component="div"
      {...props}
    />
  )
}

FooterNav.propTypes = {
  className: PropTypes.string,
}

export default withStyles(styles, { name: "HypFooterNav" })(FooterNav)
