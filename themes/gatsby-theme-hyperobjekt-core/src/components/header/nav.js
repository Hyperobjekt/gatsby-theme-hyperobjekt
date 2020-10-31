import React, { useContext } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { useSiteMetadata } from "../../utils/use-site-metadata"
import { Link } from "gatsby-theme-material-ui"
import { List, ListItem, withStyles } from "@material-ui/core"
import { SiteContext } from "../../utils/site-context"
import SubNavigation from "./nav-submenu"
import NavArrow from "./nav-arrow"

const styles = (theme) => {
  return {
    root: {
      flex: "0 1",
      display: "flex",
      alignItems: "stretch",
      "&.nav--desktop $list": {
        display: "flex",
      },
      "&.nav--desktop $link, &.nav--desktop $subMenuLink": {
        color: theme.palette.primary.contrastText,
        whiteSpace: "nowrap",
      },
      "&.nav--desktop $link.active": {
        fontWeight: "bold",
      },
      "&.nav--desktop $subMenu": {
        position: "absolute",
        top: "100%",
        left: "50%",
        minWidth: 200,
        opacity: 0,
        marginLeft: 0,
        transform: "translate3d(-50%, 0, 0)",
        pointerEvents: "none",
        background: theme.palette.primary.main,
        transition: `opacity ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
      },
      "&.nav--desktop $link:hover, &.nav--desktop $subMenuLink:hover": {
        background: theme.palette.action.hover,
      },
    },
    list: {},
    listItem: {
      position: "relative",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: 0,
      "&:hover $subMenu, &:focus-within $subMenu": {
        pointerEvents: "all",
        opacity: 1,
      },
    },
    link: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(2),
    },
    subMenu: { marginLeft: theme.spacing(2) },
    subMenuListItem: { padding: 0 },
    subMenuLink: {
      display: "flex",
      flex: 1,
      padding: theme.spacing(2),
    },
  }
}

const Navigation = ({ classes, className, ...props }) => {
  const { menuLinks } = useSiteMetadata()
  const { useMobileMenu } = useContext(SiteContext)
  return (
    <nav
      className={clsx(
        {
          nav: true,
          "nav--mobile": useMobileMenu,
          "nav--desktop": !useMobileMenu,
        },
        classes.root,
        className
      )}
      {...props}
    >
      <List className={clsx("nav__list", classes.list)}>
        {menuLinks.map((menuItem, index) => (
          <ListItem
            className={clsx("nav__list-item", classes.listItem)}
            key={"link" + index}
          >
            <Link
              className={clsx("nav__link", classes.link)}
              activeClassName="active"
              to={menuItem.link}
            >
              {menuItem.name}
              {menuItem.subMenu.length > 0 && <NavArrow />}
            </Link>
            {menuItem.subMenu.length > 0 && (
              <SubNavigation
                classes={{
                  root: classes.subMenu,
                  link: classes.subMenuLink,
                  listItem: classes.subMenuListItem,
                }}
                links={menuItem.subMenu}
              />
            )}
          </ListItem>
        ))}
      </List>
    </nav>
  )
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navigation)
