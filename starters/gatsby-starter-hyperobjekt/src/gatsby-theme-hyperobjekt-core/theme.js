import { createMuiTheme } from "@material-ui/core"
import { blue } from "@material-ui/core/colors"
import { deepmerge } from "@material-ui/utils"

/**
 * Base theme definitions
 */
const base = {
  palette: {
    primary: {
      light: "#122039",
      main: "#021029",
      dark: "#080c1c",
    },
    secondary: blue,
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        code: {
          background: "#eee",
        },
      },
    },
    HypCodeBlock: {
      root: {
        fontFamily: ["Fira Mono", "monospace"].join(","),
        backgroundColor: "#021029!important",
      },
    },
  },
}

/**
 * Dark theme overrides to the base theme
 */
const darkTheme = {
  palette: {
    background: {
      default: "#080c1c",
      paper: "#122039",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        code: {
          background: "#122039",
        },
      },
    },
  },
}

/**
 * A function that accepts site context (currently only `isDarkMode`)
 * and returns a theme object that is applied to the site.
 */
const HyperobjektTheme = ({ isDarkMode = false }) => {
  // base theme with dark overrides if it's in dark mode
  const baseTheme = deepmerge(base, isDarkMode ? darkTheme : {})
  // create a base theme to utilize theme values and functions
  const theme = createMuiTheme(baseTheme)
  // build overrides
  const overrides = {
    overrides: {
      /** Site wide global style overrides */
      MuiCssBaseline: {
        "@global": {
          // update padding and font on <code> elements
          code: {
            padding: `2px ${theme.spacing(1)}px`,
            borderRadius: theme.shape.borderRadius,
            fontFamily: ["Fira Mono", "monospace"].join(","),
          },
        },
      },
      /** Add margins to material UI typography */
      MuiTypography: {
        h1: { marginTop: "1em" },
        h2: { marginTop: "1em" },
        h3: { marginTop: "1em" },
        h4: { marginTop: "1em" },
        h5: { marginTop: "1em" },
        h6: { marginTop: "1em" },
      },
      /** Header style overrides */
      HypHeader: {
        root: {},
        toolbar: {},
        branding: {},
        title: {},
        logo: {},
      },
      /** Content area style overrides */
      HypContent: {
        root: {
          // override link colors in content
          "& .MuiLink-root.MuiTypography-root": {
            color: theme.palette.secondary.main,
          },
        },
      },
      /** Default hero style overrides */
      HypHero: {
        root: {
          background: `linear-gradient(-10deg, #000519 67%, #001233)`,
          boxShadow: `inset 0 -18px 88px 0px #091833`,
        },
      },
      /** Code block style overrides */
      HypCodeBlock: {
        root: {
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
    /** Apply default props to components */
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        variant: "contained", // All buttons have "contained" appearance
      },
    },
  }
  // return the merged base theme with overrides
  return deepmerge(baseTheme, overrides)
}

export default HyperobjektTheme
