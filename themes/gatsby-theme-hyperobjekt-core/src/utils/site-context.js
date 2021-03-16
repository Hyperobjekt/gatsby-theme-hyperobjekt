import React, { useState, createContext } from "react"

export const SiteContext = createContext()

export const SiteProvider = ({ children }) => {
  // navigation state / setter
  const [isNavOpen, setIsNavOpen] = useState(false)
  // home page state / setter
  const [isHome, setIsHome] = useState(null)
  // color mode state / setter
  const [isDarkMode, setIsDarkMode] = useState(false)
  // all values / functions available to context
  const contextValue = {
    isNavOpen,
    setIsNavOpen,
    isHome,
    setIsHome,
    isDarkMode,
    setIsDarkMode,
  }
  return (
    <SiteContext.Provider value={contextValue}>{children}</SiteContext.Provider>
  )
}
