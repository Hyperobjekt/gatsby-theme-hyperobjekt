const lightTheme = {
  palette: {
    primary: {
      light: "#122039",
      main: "#021029",
      dark: "#000519",
    },
  },
}

const darkTheme = {
  palette: {
    primary: {
      light: "#122039",
      main: "#021029",
      dark: "#000519",
    },
    background: {
      default: "#122039",
      paper: "#021029",
    },
  },
  overrides: {
    MuiLink: {
      root: {
        color: "#a2b0c9",
      },
    },
  },
}

const theme = ({ isDarkMode }) => ({
  layout: {
    contentWidth: 768,
    headerHeight: 80,
    shrinkHeaderHeight: 56,
    shrinkOffset: -32,
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  ...(isDarkMode ? darkTheme : lightTheme),
})

export default theme
