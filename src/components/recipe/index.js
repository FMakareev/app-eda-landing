import React from "react"
import { Parallax } from "react-scroll-parallax"
import RecipeHeader from "./recipe-header"
import RecipeBody from "./recipe-body"
import Container from "../container"
import RecipeLeft from "../../../static/images/recipe-left-img.jpg"
import RecipeRight from "../../../static/images/recipe-right-img.jpg"
import { recipeDataPropTypes } from "../../interfaces"

export const Recipe = (props) => {

  const {
    recipeData,
    updateRecipeData,
  } = props;
  return (<div className="recipe_wrapper">

    <Container className={"recipe_container"}>
      <RecipeHeader {...props}/>
    </Container>
    <Container className={"recipe_wrapper-body"}>
      <Parallax className={"recipe_body-left-bg"} y={[-25, 15]} tagOuter="figure">
        <img src={RecipeLeft} alt=""/>
      </Parallax>
      <RecipeBody {...props}/>
      <Parallax className='recipe_body-right-bg' y={[15, -35]} tagOuter="figure">
        <img src={RecipeRight} alt=""/>
      </Parallax>
    </Container>
  </div>)
}
Recipe.propTypes = {
  recipeData: recipeDataPropTypes,
}
export default Recipe