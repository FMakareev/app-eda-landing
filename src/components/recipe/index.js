import React from "react"
import RecipeHeader from "./recipe-header"
import RecipeBody from "./recipe-body"
import Container from "../container"
import RecipeLeft from '../../../static/images/recipe-left-img.jpg';
import RecipeRight from '../../../static/images/recipe-right-img.jpg';
import { Parallax } from "react-scroll-parallax"
import tomato from "../../../static/images/1-tomato-img.jpg"

export const Recipe = () => (<div className="recipe_wrapper">

  <Container className={'recipe_container'}>
    <RecipeHeader/>

    <Parallax className="recipe_right-bg" y={[-80, 20]} x={["50%", 0]} tagOuter="figure">
      <img src={tomato} alt={"перец"}/>
    </Parallax>
  </Container>
  <Container className={'recipe_wrapper-body'}>
    <img src={RecipeLeft} className={'recipe_body-left-bg'} alt=""/>
    <RecipeBody/>
    <img src={RecipeRight} className={'recipe_body-right-bg'} alt=""/>
  </Container>
</div>)

export default Recipe