import React from "react"
import Layout from "../Components/Layout"
import Header from "../Components/food/Header"
import Services from "../Components/food/services"
import Testimonial from "../Components/food/Testimonials"
import BottomImages from "../Components/food/BottomImages"

export default function Food() {
  return (
    <Layout>
      <Header />
      <Services />
      <Testimonial />
      <BottomImages />
    </Layout>
  )
}
