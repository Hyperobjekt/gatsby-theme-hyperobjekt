import React, { useState, createContext } from "react"
import { useSiteConfig } from "./use-site-config"
import { useWindowSize } from "@hyperobjekt/hooks"

export const NavContext = createContext()

export const NavProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { mobileMenuBreakpoint } = useSiteConfig()
  const { width } = useWindowSize()
  const useMobileMenu = width < mobileMenuBreakpoint
  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen, useMobileMenu }}>
      {children}
    </NavContext.Provider>
  )
}
