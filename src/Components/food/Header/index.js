import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-image: url("/food/desktop/image-header.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;

  h1 {
    position: absolute;
    font-size: 3.5rem;
    font-family: "Fraunces", serif;
    top: 15%;
    font-weight: 800;
    color: white;
    text-transform: uppercase;
    letter-spacing: 10px;

    @media screen and (max-width: 774px) {
      font-size: 2.4rem;
      text-align: center;
    }
  }

  .arrow {
    position: absolute;
    top: 35%;
  }
`

export default function Header() {
  return (
    <Container>
      <h1>We are creatives</h1>
      <svg
        className="arrow"
        width="36"
        height="114"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="#FFF"
          stroke-width="6"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 3v100M3 95.484l15 15 15-15" />
        </g>
      </svg>
    </Container>
  )
}
