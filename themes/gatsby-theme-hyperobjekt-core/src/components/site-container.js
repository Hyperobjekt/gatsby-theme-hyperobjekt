import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import React, { useContext } from "react"
import theme from "../theme"
import { SiteContext } from "../utils/site-context"
const SiteContainer = ({ children }) => {
  const { isDarkMode } = useContext(SiteContext)
  const adjustedTheme = useMemo(
    () =>
      createMuiTheme(theme, {
        palette: { type: !isDarkMode ? "dark" : "light" },
      }),
    [theme, isDarkMode]
  )
  console.log("theme", adjustedTheme, adjustedTheme.palette.type)
  return (
    <div>
      <ThemeProvider theme={adjustedTheme}>{children}</ThemeProvider>
    </div>
  )
}

export default SiteContainer
