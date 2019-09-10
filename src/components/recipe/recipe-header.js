import React from "react"
import IconReload from "../../images/icon-reload.svg"
import Config from "../../config"
import { randomRecipe } from "../../pages"
import { recipeDataPropTypes } from "../../interfaces"


const RecipeHeader = (props) => {
  const {
    recipeData,
    updateRecipeData,
  } = props

  return (<div className="recipe_header">
    <h2 className="recipe_title title_h2">
      {recipeData && recipeData.recipe && recipeData.recipe.name}
    </h2>

    <div className="recipe_info">
      <div className="recipe_author">
        {
          recipeData && recipeData.chief && recipeData.chief.photo_list &&
          <div className="recipe_author-img-wrapper">
            <img
              className="recipe_author-img"
              src={recipeData && recipeData.chief && recipeData.chief.photo_list}
              alt="фото шеф повора"
            />
          </div>
        }
        <div className="recipe_author-name">
          {recipeData && recipeData.chief && recipeData.chief.name}
        </div>
        <button
          onClick={() => {
            updateRecipeData(`${Config.endpoints.getRecipe}${randomRecipe.getRandomId()}`)
          }}
          aria-label={"Другой рецепт"}
          className="button recipe_reload-mobile-btn"
        >
          <img
            className={"recipe_reload-icon"}
            src={IconReload}
            alt="icon reload"
          />
          Другой рецепт
        </button>
      </div>

      <div className="recipe_cooking-time">
        Время приготовления: 15 мин
      </div>
      <div className="recipe_ingredients-count">
        Потребуется {recipeData && recipeData.ingredients && Object.values(recipeData.ingredients).length} ингредиентов
      </div>
    </div>
    <button
      onClick={() => {
        updateRecipeData(`${Config.endpoints.getRecipe}${randomRecipe.getRandomId()}`)
      }}
      aria-label={"Другой рецепт"}
      className="button recipe_reload-btn"
    >
      <img className={"recipe_reload-icon"} src={IconReload} alt="icon reload"/>
      Показать другой рецепт
    </button>
  </div>)
}

RecipeHeader.propTypes = {
  recipeData: recipeDataPropTypes,
}


export default RecipeHeader
