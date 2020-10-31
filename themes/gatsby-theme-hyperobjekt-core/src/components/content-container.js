import { styled } from "@material-ui/core"
import React from "react"

const Container = styled(`div`)(({ theme }) => {
  return {
    maxWidth: theme.layout.contentWidth,
    padding: theme.spacing(2),
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
    },
  }
})

const ContentContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export default ContentContainer
