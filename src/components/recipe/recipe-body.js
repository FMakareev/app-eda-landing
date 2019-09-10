import React, { useEffect } from "react"
import RecipeIngredients from "./recipe-ingredients"
import IconPlay from "../../../static/images/icon-play.svg"
import { recipeDataPropTypes } from "../../interfaces"
import { CyrillicToTransliteration } from "../../utils/translit"


export const CreateRecipeLink = (recipeData) => {
  if (recipeData) {
    return `https://www.tveda.ru/recepty/${CyrillicToTransliteration(recipeData.recipe.name)}?id=${recipeData.recipe.id}`
  } else {
    return "https://www.tveda.ru/recepty/"
  }
}


const YoutubeVideo = ({ recipeData, toggleVideo, playVideo }) => {
  const [YT, setYT] = React.useState({
    player: null,
    state: null,
    currentTime: 0,
    onPlaying: null,
    prevElem: null,
  })

  useEffect(() => {
    if (YT.player && YT.prevElem) {
      YT.player.pauseVideo()
      YT.player.clearVideo()
      YT.prevElem.setAttribute("src", recipeData &&
        Array.isArray(recipeData.cooking_process) &&
        recipeData.cooking_process[recipeData.cooking_process.length - 1].image)
      document.getElementById("yt-video").replaceWith(YT.prevElem)
      setYT({
        ...YT,
        currentTime: 0,
        state: null,
      })
    }
  }, [recipeData])

  return (<a
    onClick={(event) => {
      if (recipeData && recipeData.recipe.video) {
        event.preventDefault()
        let prevElem = document.getElementById("yt-video").cloneNode(true)

        let player = new window.YT.Player("yt-video", {
          videoId: recipeData && recipeData.recipe.video,
          events: {
            "onReady": () => {
              player.playVideo()
              if(YT.currentTime > 0){
                player.seekTo(YT.currentTime)
              }
            },
          },
        })
        setYT({
          ...YT,
          state: "playing",
          prevElem,
          player,
        })
      }
    }}
    rel="noopener"
    aria-label={"рецепты на сайте"}
    target={"_blank"}
    href={CreateRecipeLink(recipeData)}
    className="recipe_preview f-grid-cell">
    <img
      id={"yt-video"}
      className="recipe_preview-img"
      src={recipeData &&
      Array.isArray(recipeData.cooking_process) &&
      recipeData.cooking_process[recipeData.cooking_process.length - 1].image}
      alt="preview"
    />
    <button
      id={"yt-video-preview-link"}
      aria-label="открыть рецепт"
      className="recipe_preview-link"
    >
      <img src={IconPlay} alt=""/>
    </button>
    <div
      onClick={(event) => {
        if (recipeData && recipeData.recipe.video) {
          event.preventDefault()
          event.stopPropagation()
          if(YT.player){
            let time = YT.player.getCurrentTime()
            YT.player.pauseVideo();
            YT.player.clearVideo();
            setYT({
              ...YT,
              state: null,
              currentTime: time,
            })
          }
          document.getElementById("yt-video").replaceWith(YT.prevElem)

        }
      }}
      style={{
        display: YT.state === "playing" ? "block" : "none",
        width: "100%",
        top: "70px",
        bottom: "50px",
        position: "absolute",
        zIndex: 1,
        backgroundColor: "transparent",
      }}/>

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
