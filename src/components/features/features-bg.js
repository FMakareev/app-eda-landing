import React, {Fragment} from "react"
import { Parallax } from "react-scroll-parallax"

import PepperImg from "../../../static/images/1-pepper-img.jpg"
import GreenOneImg from "../../../static/images/1-green.jpg"
import GreenTwoImg from "../../../static/images/2-green.jpg"
import TomatoTwoImg from "../../../static/images/2-tomato-img.jpg"
import TomatoThreeImg from "../../../static/images/3-tomato-img.jpg"

export const FeaturesBg = () => {
  return (
    <Fragment>

      <div className={'features-bg_pepper'}>
        <img src={PepperImg} alt=""/>
      </div>

      <Parallax y={[-20,40]} className={'features-bg_green-one'}>
        <img src={GreenOneImg} alt=""/>
      </Parallax>

      <Parallax  y={[50, -50]}  className={'features-bg_green-two'}>
        <img src={GreenTwoImg} alt=""/>
      </Parallax>

      <Parallax  y={[100, -100]} className={'features-bg_tomato-two'}>
        <img src={TomatoTwoImg} alt=""/>
      </Parallax>

      <Parallax  y={[80, -80]} className={'features-bg_tomato-three-top'}>
        <img src={TomatoThreeImg} alt=""/>
      </Parallax>

      <Parallax  y={[120, -120]} className={'features-bg_tomato-three-bottom'}>
        <img src={TomatoThreeImg} alt=""/>
      </Parallax>
    </Fragment>
  )
}

export default FeaturesBg