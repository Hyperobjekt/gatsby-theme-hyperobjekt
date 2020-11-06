import React from "react"
import clsx from "clsx"
import { Link } from "gatsby-theme-material-ui"
import { List, ListItem, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => {
  return {
    root: {},
    listItem: {},
    link: {},
  }
})

const SubNavigation = ({
  links,
  className,
  classes: overrides,
  onSelect,
  ...props
}) => {
  const classes = useStyles()
  return (
    <List
      className={clsx("nav__sub-menu", classes.root, overrides.root, className)}
      {...props}
    >
      {links.map((menuItem, index) => (
        <ListItem
          className={clsx(
            "nav__sub-list-item",
            classes.listItem,
            overrides.listItem
          )}
          key={"link" + index}
        >
          <Link
            className={clsx("nav__sub-link", classes.link, overrides.link)}
            activeClassName="active"
            onClick={onSelect}
            to={menuItem.link}
          >
            {menuItem.name}
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

SubNavigation.defaultProps = {
  classes: {},
  links: [],
  onSelect: () => {},
}

export default SubNavigation
