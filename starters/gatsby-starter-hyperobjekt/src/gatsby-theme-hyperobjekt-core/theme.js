import { deepmerge } from "@material-ui/utils"

const darkTheme = {
  palette: {
    background: {
      default: "#080c1c",
      paper: "#122039",
    },
  },
  overrides: {
    MuiLink: {
      root: {
        color: "#a2b0c9",
      },
    },
    MuiCssBaseline: {
      "@global": {
        code: {
          background: "#122039",
        },
      },
    },
  },
}

const HyperobjektTheme = ({ isDarkMode, theme }) => {
  const base = {
    layout: {
      contentWidth: 768,
      headerHeight: 80,
      shrinkHeaderHeight: 56,
      shrinkOffset: -32,
    },
    palette: {
      primary: {
        light: "#122039",
        main: "#021029",
        dark: "#080c1c",
      },
    },
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
    overrides: {
      MuiTypography: {
        h1: { marginTop: "1em" },
        h2: { marginTop: "1em" },
        h3: { marginTop: "1em" },
        h4: { marginTop: "1em" },
        h5: { marginTop: "1em" },
        h6: { marginTop: "1em" },
      },
      MuiCssBaseline: {
        "@global": {
          code: {
            padding: "4px 8px",
            background: "#eee",
            borderRadius: 4,
            fontFamily: ["Fira Mono", "monospace"].join(","),
          },
        },
      },
      /** Header style overrides */
      HypHeader: {
        root: {},
        toolbar: {},
        branding: {},
        title: {},
        logo: {},
      },
      HypHero: {
        root: {
          background: `linear-gradient(-10deg, #000519 67%, #001233)`,
          boxShadow: `inset 0 -18px 88px 0px #091833`,
        },
      },
      /** Code block style overrides */
      HypCodeBlock: {
        root: {
          fontFamily: ["Fira Mono", "monospace"].join(","),
          backgroundColor: "#021029!important",
          borderRadius: 0,
          [theme.breakpoints.up(780)]: {
            borderRadius: theme.shape.borderRadius,
          },
        },
      },
      /** Slide open side panel overrides */
      HypDrawer: {
        root: {},
        content: {},
        close: {},
      },
      /** Footer style overrides */
      HypFooter: {
        root: {},
        wrapper: {},
        copyright: {},
        links: {},
        listItem: {},
        link: {},
        social: {},
        socialLink: {},
      },
    },
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The default props to change
        variant: "contained", // All buttons have "contained" appearance
      },
    },
  }
  const extension = isDarkMode ? darkTheme : {}
  const mergedTheme = deepmerge(base, extension)
  return mergedTheme
}

export default HyperobjektTheme
