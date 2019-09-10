import React, { useEffect } from "react"
import RecipeIngredients from "./recipe-ingredients"
import IconPlay from "../../../static/images/icon-play.svg"
import { recipeDataPropTypes } from "../../interfaces"
import { CyrillicToTransliteration } from "../../utils/translit"
import YouTube from "react-youtube"


export const CreateRecipeLink = (recipeData) => {
  if (recipeData) {
    return `https://www.tveda.ru/recepty/${CyrillicToTransliteration(recipeData.recipe.name)}?id=${recipeData.recipe.id}`
  } else {
    return "https://www.tveda.ru/recepty/"
  }
}


const YoutubeVideo = ({ recipeData, toggleVideo, playVideo }) => {
  const [YT, setYT] = React.useState({
    state: false,
    player: null,
    currentTime: 0,
  })

  useEffect(() => {
    console.log('useEffect', YT);
    setYT({
      ...YT,
      state: false,
      currentTime: 0,
    })
  }, [recipeData])

  console.log("YT: ", YT)
  return (<a
    onClick={(event) => {
      if (recipeData && recipeData.recipe.video) {
        event.preventDefault()
        setYT({
          ...YT,
          state: true,
        })
      }
    }}
    rel="noopener"
    aria-label={"рецепты на сайте"}
    target={"_blank"}
    href={CreateRecipeLink(recipeData)}
    className="recipe_preview f-grid-cell"
  >
    {
      YT.state &&
      <YouTube
        className="recipe_preview-img"
        videoId={recipeData && recipeData.recipe.video}
        opts={{}}
        onReady={({ target }) => {
          target.seekTo(YT.currentTime)
          setYT({
            ...YT,
            player: target,
          })
        }}
        onPause={({ target }) => {
          console.log('onPause: ', target);
          setYT({
            ...YT,
            currentTime: target.getCurrentTime(),
          })
        }}
        onEnd={({ target }) => {
          console.log('onEnd: ', target);
          setYT({
            ...YT,
            state: false,
            currentTime: target.getCurrentTime(),
          })
        }}
      />
    }
    {
      !YT.state &&
      <img
        id={"yt-video-preview"}
        className="recipe_preview-img"
        src={recipeData &&
        Array.isArray(recipeData.cooking_process) &&
        recipeData.cooking_process[recipeData.cooking_process.length - 1].image}
        alt="preview"
      />
    }
    {
      !YT.state &&
      <button
        id={"yt-video-preview-link"}
        aria-label="открыть рецепт"
        className="recipe_preview-link"
      >
        <img src={IconPlay} alt=""/>
      </button>
    }
    {
      YT.state &&
      <div
        onClick={(event) => {
          if (recipeData && recipeData.recipe.video) {
            event.preventDefault()
            event.stopPropagation();
            console.log('onClick: ', YT);
            setYT({
              ...YT,
              currentTime: YT.player.getCurrentTime(),
              state: false,
            })
          }
        }}
        style={{
          width: "100%",
          top: "70px",
          bottom: "50px",
          position: "absolute",
          zIndex: 11,
          backgroundColor: "transparent",
        }}
      >
      </div>
    }
  </a>)
}


const RecipeBody = ({ recipeData }) => {
  const [playVideo, toggleVideo] = React.useState(false)

  useEffect(() => {
    toggleVideo(false)
  }, [recipeData])

  return (
    <div className="recipe_body f-grid">


      <YoutubeVideo playVideo={playVideo} toggleVideo={toggleVideo} recipeData={recipeData}/>
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
