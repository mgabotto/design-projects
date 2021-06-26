import React from "react"
import { Navbar, LinkStyled } from "./NavBarStyle"

export default function NavBar() {
  return (
    <Navbar color={"red"}>
      <LinkStyled to="/food" color="white">
        Home
      </LinkStyled>
      <LinkStyled to="/food" color="green">
        Food
      </LinkStyled>
      <LinkStyled to="/food" color="yellow">
        empty
      </LinkStyled>
    </Navbar>
  )
}
