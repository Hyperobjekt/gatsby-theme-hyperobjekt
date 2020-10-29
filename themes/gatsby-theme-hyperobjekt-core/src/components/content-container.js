import { styled } from "@material-ui/core"
import React from "react"

const Container = styled(`div`)(({ theme }) => {
  return {
    maxWidth: theme.layout.contentWidth,
    padding: theme.spacing(3),
    margin: "auto",
  }
})

const ContentContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export default ContentContainer
