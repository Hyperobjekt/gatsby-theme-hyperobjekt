import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core"
import { deepmerge } from "@material-ui/utils"
import React, { useContext, useMemo } from "react"
import { SiteContext } from "../utils/site-context"
import theme from "../theme"
const SiteContainer = ({ children }) => {
  // const { isDarkMode } = useContext(SiteContext)
  // const adjustedTheme = useMemo(() => {
  //   const updated = createMuiTheme({
  //     palette: {
  //       type: isDarkMode ? "dark" : "light",
  //     },
  //   })
  //   return deepmerge(updated, theme(updated))
  // }, [isDarkMode])
  // console.log("theme wrapper", adjustedTheme, adjustedTheme.palette.type)
  return <div>{children}</div>
}

export default SiteContainer
