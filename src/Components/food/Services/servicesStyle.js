import styled from "styled-components"

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;
  font-family: "Fraunces", serif;
  color: rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const Box = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;

  .textContainer {
    width: 55%;
    text-align: start;
  }

  h3 {
    font-size: 2.8rem;
    font-weight: 900;
    margin: 0;
  }

  .description {
    font-family: "Barlow", serif;
    color: grey;
    margin: 2.5rem 0;
    line-height: 1.8;
    font-size: 1.2rem;
  }

  .learnMore {
    font-family: "Fraunces", serif;
    text-transform: uppercase;
    font-weight: 900;
    cursor: pointer;
    display: inline;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline #ffd301 5px;
    }
  }

  @media (max-width: 1080px) {
    h3 {
      font-size: 2rem;
    }
    .description {
      font-size: 1rem;
      margin: 0;
    }
    .textContainer {
      width: 75%;
    }
  }
  @media (max-width: 744px) {
    .textContainer {
      padding: 5rem 0;
    }
    .description {
      margin: 1.2rem 0;
    }
  }
  /* 
  :nth-child(1) {
    order: 1;
  } */
`

export const Image = styled.img`
  display: block;
  width: 100%;
`

export const BoxImage = styled(Box)`
  position: relative;
  display: block;
  width: 100%;

  .textContainer {
    width: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 30%);
    text-align: center;
  }

  h3 {
    font-size: 2rem;
  }

  h3,
  .description {
    color: rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 900px) {
    .textContainer {
      padding: 1rem;
      width: 85%;
      top: 40%;
    }
    .description {
      font-size: 0.9rem;
      margin: 1rem;
    }
  }
`
