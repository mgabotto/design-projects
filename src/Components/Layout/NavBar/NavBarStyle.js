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
  overflow: hidden;
  z-index: 1;
`

export const LinkStyled = styled(Link)`
  color: black;
  font-family: "Barlow", sans-serif;
  font-size: 1.2rem;
  padding: 0.5rem 0.8rem;
  border: 2px solid black;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${props => props.color};

  &:hover {
    background-color: blue;
    color: white;
    transition: 0.5s;
  }
`
