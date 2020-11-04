import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import useCustomTheme from "../../utils/use-custom-theme"

export default function TopLayout({ children, theme }) {
  const adjustedTheme = useCustomTheme(theme)
  return (
    <ThemeProvider theme={adjustedTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
