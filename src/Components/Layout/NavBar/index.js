import React, { useState } from "react"
import { Navbar, LinkStyled } from "./NavBarStyle"

export default function NavBar() {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    console.log(window.scrollY)
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <Navbar color={"red"}>
      <LinkStyled color="white">Home</LinkStyled>
      <LinkStyled color="green">Food</LinkStyled>
      <LinkStyled color="yellow">empty</LinkStyled>
    </Navbar>
  )
}
