import { useContext, useMemo } from "react"
import { deepmerge } from "@material-ui/utils"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { SiteContext } from "./site-context"
import { useSiteConfig } from "./use-site-config"
import globalCss from "../global-css"

/**
 * Returns a custom material theme based on site configuration
 */
export default function useCustomTheme(theme) {
  // pull necessary configuration for the theme
  const { isDarkMode } = useContext(SiteContext)
  const config = useSiteConfig()

  const {
    headerHeight,
    shrinkHeaderHeight,
    shrinkOffset,
    headerContentMaxWidth,
  } = config.header

  const { contentMaxWidth, responsiveFontSizes: responsiveFontConfig } = config
  // create a memoized theme to prevent unnecessary re-renders
  return useMemo(() => {
    const base = {
      layout: {
        contentMaxWidth: contentMaxWidth,
        headerHeight: headerHeight,
        shrinkHeaderHeight: shrinkHeaderHeight,
        shrinkOffset: shrinkOffset,
        headerMaxWidth: headerContentMaxWidth,
      },
      palette: {
        type: isDarkMode ? "dark" : "light",
      },
      overrides: {
        MuiCssBaseline: {
          "@global": globalCss,
        },
      },
    }
    // get theme object from site theme
    const siteTheme =
      typeof theme === "function" ? theme({ isDarkMode }) : theme
    // merge site theme with base
    const merged = deepmerge(base, siteTheme)
    // create the material UI theme from the theme object
    const muiTheme = createMuiTheme(merged)
    // add responsive font sizing
    return responsiveFontConfig
      ? responsiveFontSizes(muiTheme, responsiveFontConfig)
      : muiTheme
  }, [
    theme,
    isDarkMode,
    responsiveFontConfig,
    headerHeight,
    shrinkHeaderHeight,
    shrinkOffset,
    headerContentMaxWidth,
    contentMaxWidth,
  ])
}
