import React from "react"
import FeaturesItem from "./features-item"
import Slider from "react-slick"
import Button from "../button"
import FeaturesMock from "../../mockup/features"

const CarouselConfig = {
  dots: true,
  infinite: true,
  speed: 500,
  nextArrow: <Button mods={"slider--right"} variant={"slider"}/>,
  prevArrow: <Button mods={"slider--left"} variant={"slider"}/>,

  slidesToShow: 1,
  slidesToScroll: 1,
}


export const Features = () => {
  return (
    <div className={"features_wrapper"}>
      <Slider
        {...CarouselConfig}
      >
        {
          FeaturesMock.map((item, index) => (
            <FeaturesItem {...item} key={`FeaturesItem-${index}`}/>
          ))
        }
      </Slider>
    </div>
  )
}

export default Features