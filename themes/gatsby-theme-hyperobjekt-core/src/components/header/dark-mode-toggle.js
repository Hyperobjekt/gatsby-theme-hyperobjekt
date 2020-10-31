import React, { useContext } from "react"
import { IconButton } from "@material-ui/core"
import { SiteContext } from "../../utils/site-context"
import DarkModeOffIcon from "./dark-mode-off-icon"
import DarkModeOnIcon from "./dark-mode-on-icon"

const DarkModeToggle = (props) => {
  const { isDarkMode, setIsDarkMode } = useContext(SiteContext)
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <IconButton onClick={handleToggle} {...props}>
      {isDarkMode ? <DarkModeOnIcon /> : <DarkModeOffIcon />}
    </IconButton>
  )
}

export default DarkModeToggle
