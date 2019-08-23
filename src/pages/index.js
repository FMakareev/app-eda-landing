import React, { Fragment } from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { Helmet } from "react-helmet"

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
      <meta charSet="utf-8"/>
      <base href="/"/>
      <title>
        Мобильное приложение телеканала Еда
      </title>
      <meta name="Description" content="Мобильное приложение телеканала Еда"/>

      <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/favicon/manifest.json"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/>
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
