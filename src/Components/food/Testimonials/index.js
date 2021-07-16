import React from "react"
import { Container, CardsContainer, Card } from "./TestimonialStyle"

export default function Testimonial() {
  return (
    <Container>
      <h3>Client testimonials</h3>
      <CardsContainer>
        <Card>
          <img src="/food/image-emily.jpg" alt="emily" />
          <p className="review">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <p className="name">Emily R.</p>
          <p className="position">Marketing Director</p>
        </Card>
        <Card>
          <img src="/food/image-thomas.jpg" alt="thomas" />
          <p className="review">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <p className="name">Thomas S.</p>
          <p className="position">Chief Operating Officer</p>
        </Card>
        <Card>
          <img src="/food/image-jennie.jpg" alt="jennie" />
          <p className="review">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <p className="name">Jennie F.</p>
          <p className="position">Business Owner</p>
        </Card>
      </CardsContainer>
    </Container>
  )
}
