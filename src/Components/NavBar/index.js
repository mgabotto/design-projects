import React from "react"
import { Navbar } from "./NavBarStyle"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <Navbar>
      <Link>Home</Link>
      <Link>Food</Link>
      <Link>empty</Link>
    </Navbar>
  )
}
