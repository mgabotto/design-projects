import React from "react"
import styled from "styled-components"

export const BottomImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  img {
    max-width: 100%;
  }

  .desktop {
    display: block;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;

    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
`

export default function Images() {
  return (
    <BottomImages>
      <img
        className="desktop"
        src="/food/desktop/image-gallery-milkbottles.jpg"
        alt="milk"
      />
      <img
        className="desktop"
        src="/food/desktop/image-gallery-orange.jpg"
        alt="orange"
      />
      <img
        className="desktop"
        src="/food/desktop/image-gallery-cone.jpg"
        alt="cone"
      />
      <img
        className="desktop"
        src="/food/desktop/image-gallery-sugarcubes.jpg"
        alt="sugarcubes"
      />
      <img
        className="mobile"
        src="/food/mobile/image-gallery-milkbottles.jpg"
        alt="milk"
      />
      <img
        className="mobile"
        src="/food/mobile/image-gallery-orange.jpg"
        alt="orange"
      />
      <img
        className="mobile"
        src="/food/mobile/image-gallery-cone.jpg"
        alt="cone"
      />
      <img
        className="mobile"
        src="/food/mobile/image-gallery-sugar-cubes.jpg"
        alt="sugarcubes"
      />
    </BottomImages>
  )
}
