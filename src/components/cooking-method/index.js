import React from "react"
import CookingMethodStep from "./cooking-method-step"
import CookingMethodFull from "./cooking-method-full"
import { Parallax } from "react-scroll-parallax"
import tomato from "../../../static/images/1-tomato-img.jpg"

export const CookingMethod = () => {
  return (<div >
    <div className="cooking-method_wrapper">
      <h2 className="title_h2 cooking-method_title">
        Способ приготовления
      </h2>

      <Parallax className="cooking-method_right-bg" y={[100, -100]} tagOuter="figure">
        <img src={tomato} alt={"перец"}/>
      </Parallax>
      <ul className="cooking-method_list">
        <CookingMethodStep/>
      </ul>
      <div className="cooking-method_more">

      </div>
    </div>
    <CookingMethodFull/>
  </div>)
}


export default CookingMethod