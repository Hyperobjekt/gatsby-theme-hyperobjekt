import React, { useContext, useMemo } from "react"
import { createMuiTheme } from "@material-ui/core/styles"
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"
import { SiteContext } from "../../utils/site-context"

export default function TopLayout({ children, theme }) {
  const { isDarkMode } = useContext(SiteContext)
  const adjustedTheme = useMemo(
    () =>
      createMuiTheme(theme, {
        palette: { type: !isDarkMode ? "dark" : "light" },
      }),
    [theme, isDarkMode]
  )
  console.log("theme", adjustedTheme, adjustedTheme.palette.type)
  return <ThemeTopLayout theme={adjustedTheme}>{children}</ThemeTopLayout>
}
