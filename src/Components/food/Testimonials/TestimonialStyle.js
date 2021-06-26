import styled from "styled-components"

export const Container = styled.div`
  /* font-family: "Barlow", serif; */

  font-family: "Fraunces", serif;
  text-align: center;
  margin: 10% 10%;

  h3 {
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.4);
    font-weight: 900;
    letter-spacing: 5px;
  }
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 100%;
    width: 15%;
    margin: 2rem;
  }

  .review {
    font-family: "Barlow", serif;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 800;
    max-width: 300px;
    margin-bottom: 3rem;
  }

  .name {
    margin: 0;
    font-size: 1.2rem;
    font-family: "Fraunces", serif;
    font-weight: 900;
  }

  .position {
    margin: 0.5rem;
    color: rgba(0, 0, 0, 0.4);
  }
`
