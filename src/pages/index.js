import React, {Fragment} from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { Helmet } from "react-helmet";

import Recipe from "../components/recipe"
import Header from "../components/header/header"
import Container from "../components/container"
import CookingMethod from "../components/cooking-method"
import Footer from "../components/footer"
import Reviews from "../components/reviews"
import Features from "../components/features"


export const DeviceDetected = typeof window === "object" ? require("current-device").default : null

export default () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <base href="/"/>
      <title>
        Мобильное приложение телеканала Еда
      </title>
      <meta name="Description" content="Мобильное приложение телеканала Еда"/>
    </Helmet>
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
  </Fragment>
)
