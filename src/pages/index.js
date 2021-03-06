import React, { Fragment } from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import { useAxiosRequest } from "use-axios-request"

import Recipe from "../components/recipe"
import Header from "../components/header/header"
import Container from "../components/container"
import CookingMethod from "../components/cooking-method"
import Footer from "../components/footer"
import Reviews from "../components/reviews"
import Features from "../components/features"
import Head from "../components/head/head"
import Config from "../config"
import { RandomRecipe } from "../utils/RandomRecipe"


export const DeviceDetected = typeof window === "object" ? require("current-device").default : null


export const randomRecipe = new RandomRecipe(Config.recipeList)

let firstID = randomRecipe.getRandomId()

export const HomePage = ({ location }) => {
  console.log("HomePage: ", location)
  console.log("HomePage: ", location.search.replace("?id=", ""))


  if (location.search) {
    firstID = location.search.replace("?id=", "")
    randomRecipe.recipe = firstID;
  }
  /**
   * config: string
   * data: any
   * error: Object
   * isFetching: boolean
   * refresh: ƒ ()
   * requestId: int
   * update: ƒ (config)
   * */
  const { data, update } = useAxiosRequest(`${Config.endpoints.getRecipe}${firstID}`, {})

  return (
    <Fragment>
      <Head/>
      <ParallaxProvider>
        <div className={"app-wrapper"}>
          <Header/>
          <Recipe
            recipeData={data}
            updateRecipeData={update}
          />
          <Container>
            <CookingMethod
              recipeData={data}
            />
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
}


export default HomePage
