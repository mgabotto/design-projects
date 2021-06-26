import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { LayoutContainer, Content } from "./LayoutStyle"
import "./globalStyle.css"

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </LayoutContainer>
  )
}

// Gitgub / Linkedin /
