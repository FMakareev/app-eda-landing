import React from "react"
import { Parallax } from "react-scroll-parallax"

import { DeviceDetected } from "../../pages/index"
import mushroom from "../../../static/images/1-mushroom.jpg"
import StoreButtonGroup from "../storeButtonGroup"


export const CookingMethodFull = ({ recipeData }) => {
  return (<div className="cooking-method-full_container">
    <Parallax className="cooking-method_left-bg" y={[100, -100]}>
      <img src={mushroom} alt={"mushroom"}/>
    </Parallax>
    <Parallax
      disabled={DeviceDetected && !DeviceDetected.desktop()}
      // y={[15, -30]}
      y={[0, 0]}
    >
      <div className="cooking-method-full_wrapper">
        <div className="cooking-method-full_content">
          <h2 className="title_h2 cooking-method-full_title cooking-method-full_title--mobile">
            Читайте полный рецепт в нашем удобном приложении
          </h2>
          <h2 className="title_h2 cooking-method-full_title">
            Посмотреть полный рецепт <br/>
            {recipeData && recipeData.recipe.name}
            в мобильном приложении
          </h2>
          <StoreButtonGroup
            className={"cooking-method-full_btn-group"}
            buttonClassNames={"button_primary--large"}
          />
          <div className="cooking-method-full_website cooking-method-full_website--mobile">
            Или смотрите рецепт
            на <a rel="noopener"
                  aria-label={"рецепты на сайте"}
                  target={"_blank"}
                  href="https://www.tveda.ru/recepty/"
                  className={"button_link button_link--white cooking-method-full_website-link"}
          >
            сайте
          </a>
          </div>
          <div className="cooking-method-full_website">
            Или перейти на страницу рецепта на <a
            rel="noopener"
            aria-label={"рецепты на сайте"}
            target={"_blank"}
            href="https://www.tveda.ru/recepty/"
            className={"button_link button_link--white cooking-method-full_website-link"}
          >
            сайте
          </a>
          </div>
        </div>
      </div>
    </Parallax>
  </div>)
}
export default CookingMethodFull

