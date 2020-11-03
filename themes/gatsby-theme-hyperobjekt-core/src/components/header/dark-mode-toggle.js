import React, { useContext } from "react"
import { IconButton } from "@material-ui/core"
import { SiteContext } from "../../utils/site-context"
import icons from "../../icons"

const DarkModeToggle = (props) => {
  const { isDarkMode, setIsDarkMode } = useContext(SiteContext)
  const DarkModeOffIcon = icons["darkOff"]
  const DarkModeOnIcon = icons["darkOn"]
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <IconButton onClick={handleToggle} aria-label="toggle dark mode" {...props}>
      {isDarkMode ? <DarkModeOnIcon /> : <DarkModeOffIcon />}
    </IconButton>
  )
}

export default DarkModeToggle
