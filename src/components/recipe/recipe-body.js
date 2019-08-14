import React from "react"
import RecipeIngredients from "./recipe-ingredients"

export default () => (
  <div className="recipe_body f-grid">
    <div className="recipe_preview f-grid-cell">
      <img
        className="recipe_preview-img"
        src="https://cdn.tveda.ru/thumbs/eb6/eb6e50fc7854466860edc9f78132d33d/308ea02cec2f797ac9372e18137b4efb.jpg"
        alt=""
      />
      <button className="recipe_preview-link">

      </button>
    </div>
    <RecipeIngredients/>
  </div>)