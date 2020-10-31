import React, { useContext, useMemo } from "react"
import { deepmerge } from "@material-ui/utils"

import { createMuiTheme } from "@material-ui/core/styles"
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"
import { SiteContext } from "../../utils/site-context"
import theme from "../../theme"

export default function TopLayout({ children }) {
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
    const merged = deepmerge(base, theme)
    return createMuiTheme(merged)
  }, [isDarkMode])
  console.log("theme wrapper", adjustedTheme, adjustedTheme.palette.type)
  return <ThemeTopLayout theme={adjustedTheme}>{children}</ThemeTopLayout>
}
