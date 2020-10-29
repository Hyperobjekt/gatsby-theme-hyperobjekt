import { createMuiTheme } from "@material-ui/core"
// import { blue, pink } from "@material-ui/core/colors"

const theme = createMuiTheme({
  layout: {
    contentWidth: 768,
    headerHeight: 80,
    shrinkHeaderHeight: 64,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      mobileMenu: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
})

export default theme
