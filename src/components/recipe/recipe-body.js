import React, { useEffect } from "react"
import RecipeIngredients from "./recipe-ingredients"
import IconPlay from "../../../static/images/icon-play.svg"
import { recipeDataPropTypes } from "../../interfaces"
import { CyrillicToTransliteration } from "../../utils/translit"


const CreateLink = (recipeData) => {
  if (recipeData) {
    return `https://www.tveda.ru/recepty/${CyrillicToTransliteration(recipeData.recipe.name)}?id=${recipeData.recipe.id}`
  } else {
    return "https://www.tveda.ru/recepty/"
  }
}

const RecipeBody = ({ recipeData }) => {
  const [playVideo, toggleVideo] = React.useState(false)

  useEffect(() => {
    toggleVideo(false)
  }, [recipeData])

  return (
    <div className="recipe_body f-grid">
      {
        playVideo && (<div className="recipe_preview f-grid-cell">
          <iframe
            style={{
              width: "100%",
            }}
            className="recipe_preview-img"
            src={`https://www.youtube.com/embed/${recipeData && recipeData.recipe.video}?autoplay=1`}
            // src={`https://www.youtube.com/embed/gpqp58kJ1I8?autoplay=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div
            onClick={(event) => {
              if (recipeData && recipeData.recipe.video) {
                event.preventDefault()
                toggleVideo(false)
              }
            }}
            style={{
              width: "100%",
              top: "70px",
              bottom: "50px",
              position: "absolute",
              zIndex: 1,
              backgroundColor: "transparent",
            }}>

          </div>
        </div>)
      }

      {
        !playVideo &&
        recipeData && (<a
          onClick={(event) => {
            if (recipeData && recipeData.recipe.video) {
              event.preventDefault()
              toggleVideo(true)
            }
          }}
          rel="noopener"
          aria-label={"рецепты на сайте"}
          target={"_blank"}
          href={CreateLink(recipeData)}
          className="recipe_preview f-grid-cell"
        >
          <img
            className="recipe_preview-img"
            src={recipeData &&
            Array.isArray(recipeData.cooking_process) &&
            recipeData.cooking_process[recipeData.cooking_process.length - 1].image}
            alt="preview"
          />
          <button aria-label="открыть рецепт" className="recipe_preview-link">
            <img src={IconPlay} alt=""/>
          </button>
        </a>)
      }

      <RecipeIngredients

        recipe={recipeData && recipeData.recipe}
        ingredients={recipeData && recipeData.ingredients}
      />
    </div>)
}

RecipeBody.propTypes = {
  recipeData: recipeDataPropTypes,
}
export default RecipeBody