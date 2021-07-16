import React from "react"
import { Navbar, LinkStyled } from "./NavBarStyle"

export default function NavBar() {
  return (
    <Navbar color={"red"}>
      <img src="/food/logoMG.svg" alt="logo" />
      {/* <div className="links"> */}
      <LinkStyled to="/" color="white">
        Home
      </LinkStyled>
      <LinkStyled to="/food" color="green">
        Food
      </LinkStyled>
      <LinkStyled to="/food" color="yellow">
        empty
      </LinkStyled>
      {/* </div> */}
    </Navbar>
  )
}
