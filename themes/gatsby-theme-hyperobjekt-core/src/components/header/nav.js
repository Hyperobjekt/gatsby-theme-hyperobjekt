import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { useSiteMetadata } from "../../utils/use-site-metadata"
import { Link } from "gatsby-theme-material-ui"
import { List, ListItem, withStyles } from "@material-ui/core"
import SubNavigation from "./nav-submenu"
import NavArrow from "./nav-arrow"

export const styles = (theme) => {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: "0 1",
      display: "flex",
      alignItems: "stretch",
    },
    /* Styles applied to the list wrapper */
    list: {},
    /* Styles applied to each list item */
    listItem: {
      position: "relative",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: 0,
    },
    /* Styles applies to each link */
    link: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(2),
      whiteSpace: "nowrap",
    },
    /** Styles applied to the sub menu root */
    subMenu: { marginLeft: theme.spacing(2) },
    /** Styles applied to each sub menu list item */
    subMenuListItem: { padding: 0 },
    /** Styles applied to each sub menu link */
    subMenuLink: {
      display: "flex",
      flex: 1,
      padding: theme.spacing(2),
    },
  }
}

const Navigation = ({
  classes,
  className,
  component: Component = "nav",
  subMenu = false,
  onSelect,
  filter,
  ...props
}) => {
  const { menuLinks } = useSiteMetadata()
  const navLinks = menuLinks.filter(filter)
  return (
    <Component className={clsx("nav", classes.root, className)} {...props}>
      <List className={clsx("nav__list", classes.list)}>
        {navLinks.map((menuItem, index) => (
          <ListItem
            className={clsx("nav__list-item", classes.listItem)}
            key={"link" + index}
          >
            <Link
              className={clsx("nav__link", classes.link)}
              activeClassName="active"
              onClick={onSelect}
              to={menuItem.link}
            >
              {menuItem.name}
              {menuItem.subMenu.length > 0 && subMenu && <NavArrow />}
            </Link>
            {menuItem.subMenu.length > 0 && subMenu && (
              <SubNavigation
                classes={{
                  root: classes.subMenu,
                  link: classes.subMenuLink,
                  listItem: classes.subMenuListItem,
                }}
                onSelect={onSelect}
                links={menuItem.subMenu}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Component>
  )
}

Navigation.defaultProps = {
  filter: (link) => link.location === "all",
  onSelect: () => {},
}

Navigation.propTypes = {
  /**
   * Determines if submenus should render
   */
  subMenu: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  /**
   * A function used to filter out links from the menuLinks
   */
  filter: PropTypes.func.isRequired,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
}

export default withStyles(styles, { name: "HypNavigation" })(Navigation)
