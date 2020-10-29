import React, { useContext } from "react"
import clsx from "clsx"
import { useSiteMetadata } from "../../utils/use-site-metadata"
import { Link } from "gatsby-theme-material-ui"
import { List, ListItem, makeStyles } from "@material-ui/core"
import { NavContext } from "../../utils/nav-context"
import SubNavigation from "./nav-submenu"
const useStyles = makeStyles((theme) => {
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
        left: 0,
        minWidth: 240,
        opacity: 0,
        background: theme.palette.primary.main,
        transition: `opacity ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
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
        opacity: 1,
      },
    },
    link: {
      padding: theme.spacing(2),
    },
    subMenu: {},
    subMenuListItem: {},
    subMenuLink: {},
  }
})

const Navigation = ({ className, ...props }) => {
  const { menuLinks } = useSiteMetadata()
  const { useMobileMenu } = useContext(NavContext)
  const classes = useStyles()
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

export default Navigation
