import React from "react"
import GooglePlayBtn from "../../images/google-play-btn.svg"
import IOSBtn from "../../images/ios-btn.svg"
import Button from "../button"


export const CookingMethodFull = () => {
  return (<div>
    <div className="cooking-method-full_wrapper">
      <div className="cooking-method-full_content">
        <h2 className="title_h2 cooking-method-full_title cooking-method-full_title--mobile">
          Читайте полный рецепт в нашем удобном приложении
        </h2>
        <h2 className="title_h2 cooking-method-full_title">
          Посмотреть полный рецепт
          Тальятелле аль помодоро
          в мобильном приложении
        </h2>
        <div className="cooking-method-full_btn-group">

          <Button variant={"primary"} size={"large"}>
            <img className={"button_primary-img "} src={IOSBtn} alt=""/>
          </Button>
          <Button variant={"primary"} size={"large"}>
            <img className={"button_primary-img "} src={GooglePlayBtn} alt=""/>
          </Button>
        </div>
        <div className="cooking-method-full_website cooking-method-full_website--mobile">
          Или смотрите рецепт
          на <a className={"button_link button_link--white cooking-method-full_website-link"} href="">
          сайте
        </a>
        </div>
        <div className="cooking-method-full_website">
          Или перейти на страницу рецепта на <a
          className={"button_link button_link--white cooking-method-full_website-link"} href="">
          сайте
        </a>
        </div>
      </div>
    </div>
  </div>)
}
export default CookingMethodFull

