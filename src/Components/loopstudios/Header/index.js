import React from "react"
import styled from "styled-components"
import { theme } from "../theme"

const Container = styled.header`
  background-image: url("/loopstudios/desktop/image-hero.jpg");
  background-size: cover;
  height: 90vh;
`

const BoxTitle = styled.div`
  padding: 2rem;
  width: 40%;
  border: 2px white solid;
  position: relative;
  top: 40%;
  left: 15%;

  h1 {
    margin: 0;
    display: block;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 5.5rem;
    font-weight: 300;
    color: ${props => props.theme.white};
    font-family: "Josefin Sans", sans-serif;
  }
`

export default function Header() {
  return (
    <Container>
      <BoxTitle theme={theme}>
        <h1>Immersive experiences that deliver</h1>
      </BoxTitle>
    </Container>
  )
}
