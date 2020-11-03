import React, { useContext, useMemo } from "react"
import { deepmerge } from "@material-ui/utils"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
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
      overrides: {
        MuiCssBaseline: {
          "@global": {
            ":root": { "--reachSkipNav": 1 },
            "[data-reach-skip-link]": {
              border: "0",
              clip: "rect(0 0 0 0)",
              height: "1px",
              width: "1px",
              margin: "-1px",
              padding: "0",
              overflow: "hidden",
              position: "absolute",
            },
            "[data-reach-skip-link]:focus": {
              padding: "1rem",
              position: "fixed",
              top: "10px",
              left: "10px",
              background: "white",
              zIndex: "1000",
              width: "auto",
              height: "auto",
              clip: "auto",
            },
            // eslint-disable-next-line no-useless-computed-key
            ["@media (prefers-reduced-motion: reduce)"]: {
              "*": {
                animationDuration: "0.01ms !important",
                animationIterationCount: "1 !important",
                transitionDuration: "0.01ms !important",
                scrollBehavior: "auto !important",
              },
            },
          },
        },
      },
    }
    const baseMuiTheme = createMuiTheme(base)
    const siteTheme =
      typeof theme === "function"
        ? theme({ isDarkMode, theme: baseMuiTheme })
        : theme
    const merged = deepmerge(base, siteTheme)
    const muiTheme = createMuiTheme(merged)
    return responsiveFontSizes(muiTheme)
  }, [theme, isDarkMode])
  return <ThemeTopLayout theme={adjustedTheme}>{children}</ThemeTopLayout>
}
