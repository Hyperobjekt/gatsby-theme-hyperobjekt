// This is a placeholder for latent shadowing in sibling themes
import { withStyles } from "@material-ui/core"
import clsx from "clsx"
import React from "react"
import FooterCopyright from "./footer-copyright"
import FooterNav from "./footer-nav"
import FooterSocial from "./footer-social"

const styles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.primary.main,
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    marginTop: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
    },
  },
  wrapper: {
    position: "relative",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.contrastText,
    maxWidth: theme.layout.footerMaxWidth || 960,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
  },
  copyright: {
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      bottom: 0,
      left: 0,
    },
  },
  links: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      order: 3,
      marginBottom: 0,
    },
  },
  listItem: {
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      alignItems: "flex-start",
    },
    "&:last-child $link": {
      paddingBottom: 0,
    },
  },
  link: {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(0.5),
  },
  social: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(4), // spacing so copyright fits below
    },
  },
  socialLink: {},
})

const SiteFooter = ({ className, classes, children, ...props }) => {
  return (
    <footer
      id="footer"
      className={clsx("footer", classes.root, className)}
      {...props}
    >
      <div className={clsx("footer__wrapper", classes.wrapper)}>
        {children}
        <FooterNav
          classes={{
            root: classes.links,
            listItem: classes.listItem,
            link: classes.link,
          }}
        />
        <FooterSocial
          classes={{ root: classes.social, link: classes.socialLink }}
        />
        <FooterCopyright classes={{ root: classes.copyright }} />
      </div>
    </footer>
  )
}

export default withStyles(styles, { name: "HypFooter" })(SiteFooter)
