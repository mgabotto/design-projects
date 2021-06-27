import styled from "styled-components"
import { Link } from "gatsby"
import "../globalStyle.css"

export const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 10%;
  padding: 0.5rem 0;
  background-color: transparent;
  z-index: 1;

  img {
    height: 4rem;
    position: absolute;
    left: 30px;
  }

  .links {
    display: flex;
    gap: 2rem;
  }
`

export const LinkStyled = styled(Link)`
  color: black;
  font-family: "Barlow", sans-serif;
  font-size: 1.2rem;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  text-decoration: none;
  transition: 0.4s ease-in;
  background: #ff96ad;

  &:hover {
    background-color: #e8e9eb;
    box-shadow: inset -10.5em 0 0 #ff96ad, inset 10.5em 0 0 0 #ff96ad;
    top: -5px;
    left: -5px;
  }
`
