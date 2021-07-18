import React from "react"
import styled from "styled-components"
import { theme } from "../theme"

const Container = styled.section`
  margin: 10%;
  position: relative;

  img {
    /* max-width: 100%; */
    width: 50vw;
    height: auto;
  }
`

const Card = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  padding: 5%;
  background-color: white;
  max-width: 30vw;
  border: 1px solid black;

  h2 {
    font-family: "Josefin Sans", sans-serif;
    text-transform: uppercase;
    /* font-size: 3rem; */
    font-size: 2.5vw;
    font-weight: 300;
  }

  p {
    font-family: "Alata", sans-serif;
  }
`

export default function Introduction() {
  return (
    <Container theme={theme}>
      <img src="/loopstudios/desktop/image-interactive.jpg" alt="vr-person" />
      <Card theme={theme}>
        <h2>The leader on interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </Card>
    </Container>
  )
}
