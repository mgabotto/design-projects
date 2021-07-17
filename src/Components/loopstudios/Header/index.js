import React from "react"
import styled from "styled-components"
import { theme } from "../theme"

const Container = styled.header`
  background-image: url("/loopstudios/desktop/image-hero.jpg");
  background-size: cover;
  height: 90vh;

  h1 {
    margin: 0;
    padding: 20% 15%;
    color: ${props => props.theme.darkGrey};
  }
`

export default function Header() {
  return (
    <Container theme={theme}>
      <h1>Inmmersive experiences thar deliver</h1>
    </Container>
  )
}
