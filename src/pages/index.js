import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

import Recipe from "../components/recipe"
import Header from "../components/header/header"
import Container from "../components/container"
import CookingMethod from "../components/cooking-method"
import Footer from "../components/footer"
import Reviews from "../components/reviews"
import Features from "../components/features"

export default () => (
  <ParallaxProvider>
    <div className={"app-wrapper"}>
      <Header/>


      <Recipe/>


      <Container>
        <CookingMethod/>
      </Container>

      <Container>
        <Features/>
      </Container>
      <Reviews/>

      <Footer/>
    </div>
  </ParallaxProvider>
)
