import React from "react"
import RecipeIngredients from "./recipe-ingredients"
import IconPlay from "../../../static/images/icon-play.svg"
import { recipeDataPropTypes } from "../../interfaces"

const RecipeBody = ({ recipeData }) => (
  <div className="recipe_body f-grid">
    <a
      rel="noopener"
      aria-label={"рецепты на сайте"}
      target={"_blank"}
      href="https://www.tveda.ru/recepty/"
      className="recipe_preview f-grid-cell"
    >
      <img
        className="recipe_preview-img"
        src={recipeData && recipeData.recipe && recipeData.recipe.image}
        alt=""
      />
      <button aria-label="открыть рецепт" className="recipe_preview-link">
        <img src={IconPlay} alt=""/>
      </button>
    </a>
    <RecipeIngredients
      ingredients={recipeData && recipeData.ingredients}
    />
  </div>)

RecipeBody.propTypes = {
  recipeData: recipeDataPropTypes,
}
export default RecipeBody