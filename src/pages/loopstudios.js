import React from "react"
import Layout from "../Components/Layout"
import Header from "../Components/loopstudios/Header"
import Creations from "../Components/loopstudios/Creations"
import Introduction from "../Components/loopstudios/Introduction"

export default function Food() {
  return (
    <Layout>
      <Header />
      <Introduction />
      <Creations />
    </Layout>
  )
}
