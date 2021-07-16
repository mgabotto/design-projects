import React from "react"
import { Container, Box, Image, BoxImage } from "./servicesStyle"

export default function Services() {
  return (
    <Container>
      <Box>
        <div className="textContainer">
          <h3>Transform your brand</h3>
          <p className="description">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.{" "}
          </p>
          <p className="learnMore">Learn More</p>
        </div>
      </Box>
      <Image src="/food/desktop/image-transform.jpg" className="image"></Image>

      <Image src="/food/desktop/image-stand-out.jpg"></Image>
      <Box>
        <div className="textContainer">
          <h3>Stand out to the right audience</h3>
          <p className="description">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <p className="learnMore">Learn More</p>
        </div>
      </Box>
      <BoxImage>
        <Image src="/food/desktop/image-graphic-design.jpg" />
        <div className="textContainer">
          <h3>Graphic design</h3>
          <p className="description">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </BoxImage>
      <BoxImage>
        <Image src="/food/desktop/image-photography.jpg" />
        <div className="textContainer">
          <h3>Photography </h3>
          <p className="description">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </BoxImage>
    </Container>
  )
}
