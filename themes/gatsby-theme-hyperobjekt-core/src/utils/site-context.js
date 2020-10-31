import React, { useState, createContext } from "react"
import { useSiteConfig } from "./use-site-config"
import { useWindowSize } from "@hyperobjekt/hooks"

export const SiteContext = createContext()

export const SiteProvider = ({ children }) => {
  // navigation state / setter
  const [isNavOpen, setIsNavOpen] = useState(false)
  // mobile menu state
  const { mobileMenuBreakpoint } = useSiteConfig()
  const { width } = useWindowSize()
  const useMobileMenu = width < mobileMenuBreakpoint
  // home page state / setter
  const [isHome, setIsHome] = useState(null)
  // color mode state / setter
  const [isDarkMode, setIsDarkMode] = useState(false)
  // all values / functions available to context
  const contextValue = {
    isNavOpen,
    setIsNavOpen,
    useMobileMenu,
    isHome,
    setIsHome,
    isDarkMode,
    setIsDarkMode,
  }
  return (
    <SiteContext.Provider value={contextValue}>{children}</SiteContext.Provider>
  )
}
