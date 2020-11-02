import React, { useContext, useEffect } from "react"
import { useLocation } from "@reach/router"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import Page from "./layout/page"
import Header from "./header/header"
import Main from "./layout/main"
import Content from "./layout/content"
import Footer from "./footer/footer"
import { SiteContext } from "../utils/site-context"
import SEO from "./seo"
const Layout = ({ children, ...props }) => {
  const { isHome, setIsHome } = useContext(SiteContext) // eslint-disable-line
  const location = useLocation()
  // pull SEO from frontmatter
  const {
    title,
    description,
    keywords,
    image,
    lang,
    isBlogPost,
    location: fmLocation,
  } = props.pageContext.frontmatter
  // add classes based on the page location
  const pageClasses = isHome
    ? "page--home"
    : location.pathname
        .replace(/^\/+|\/+$/g, "")
        .split("/")
        .map((name) => "page--" + name)
  // track home status in site context
  const home = location.pathname === "/"
  useEffect(() => {
    if (home) {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
  }, []) // eslint-disable-line
  return (
    <Page className={pageClasses}>
      <SEO
        {...{
          title,
          description,
          keywords,
          image,
          lang,
          isBlogPost,
          fmLocation,
        }}
      />
      <SkipNavLink />
      <Header />
      <Main>
        <SkipNavContent />
        <Content>{children}</Content>
      </Main>
      <Footer />
    </Page>
  )
}

export default Layout
