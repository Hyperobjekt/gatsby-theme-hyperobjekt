import React from "react"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import GlobalCSS from "../utils/global-css"
import SiteContainer from "./site-container"
import Header from "./header/header"
import Main from "./main"
import ContentContainer from "./content-container"
import Footer from "./footer"

const SiteLayout = ({ children }) => {
  // const [isHome, setIsHome] = useContext(HomeContext) // eslint-disable-line
  // const location = useLocation()
  // const home = location.pathname === "/"
  // useEffect(() => {
  //   if (home) {
  //     setIsHome(true)
  //   } else {
  //     setIsHome(false)
  //   }
  // }, []) // eslint-disable-line
  return (
    <SiteContainer>
      <GlobalCSS />
      <SkipNavLink />
      <Header />
      <Main>
        <SkipNavContent />
        <ContentContainer>{children}</ContentContainer>
      </Main>
      <Footer />
    </SiteContainer>
  )
}

export default SiteLayout
