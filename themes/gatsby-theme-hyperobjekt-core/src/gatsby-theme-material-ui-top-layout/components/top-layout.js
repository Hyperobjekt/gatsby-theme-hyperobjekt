import React, { useContext, useMemo } from "react"
import { deepmerge } from "@material-ui/utils"
import { createMuiTheme } from "@material-ui/core/styles"
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"
import { SiteContext } from "../../utils/site-context"

export default function TopLayout({ children, theme }) {
  const { isDarkMode } = useContext(SiteContext)
  const adjustedTheme = useMemo(() => {
    const base = {
      layout: {
        contentWidth: 768,
        headerHeight: 80,
        shrinkHeaderHeight: 56,
        shrinkOffset: -32,
      },
      palette: {
        type: isDarkMode ? "dark" : "light",
      },
    }
    const siteTheme =
      typeof theme === "function" ? theme({ isDarkMode }) : theme
    const merged = deepmerge(base, siteTheme)
    return createMuiTheme(merged)
  }, [theme, isDarkMode])
  return <ThemeTopLayout theme={adjustedTheme}>{children}</ThemeTopLayout>
}
