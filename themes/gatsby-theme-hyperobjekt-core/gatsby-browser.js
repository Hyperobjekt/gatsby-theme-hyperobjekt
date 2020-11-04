import React from "react"
import Providers from "./src/components/providers"

export const wrapRootElement = ({ element }) => <Providers>{element}</Providers>

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation !== null) {
    const skipLink = document.querySelector("#reach-skip-nav")
    if (skipLink) {
      skipLink.focus()
    }
  }
}
