import React from "react"
import { asyncComponent } from 'react-async-component';
import Slider from "react-slick"
import { Parallax } from "react-scroll-parallax"

import ReviewCard from "./review-card"
import Button from "../button"
import ReviewList from "../../mockup/review"
import Green from '../../../static/images/3-green.png';
import tomato from '../../../static/images/3-tomato-img.jpg';

const CarouselConfig = {
  dots: false,
  variableWidth: true,
  infinite: true,
  speed: 500,
  nextArrow: <Button aria-label="следующее превью" mods={"slider--right"} variant={"slider"}/>,
  prevArrow: <Button aria-label="предыдущее превью" mods={"slider--left"} variant={"slider"}/>,
  responsive:[
    {
      breakpoint: 1010,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: true,
      }
    }
  ]
}

const ReviewPopup = asyncComponent({
  resolve: () => import('./review-popup'),
  ErrorComponent: ({ error }) => {
    console.log('ErrorComponent: ',error)
    return null
  },
  serverMode: "defer"
});

export const Reviews = () => {

  const [state, setState] = React.useState({
    modalOpen: false,
    review: null,
  })

  return (<div>
    <div className={"review_wrapper"}>
      <Parallax className={'review_right-bg'} y={[-45,45]}>
        <img src={Green} alt="зелень"/>
      </Parallax>
      <div className="review_container">
        <Slider
          {...CarouselConfig}
        >
          {
            Array.isArray(ReviewList) && ReviewList.map((item, index) => (
              <div key={`ReviewCard-${index}`} className="review-slider_item">
                <ReviewCard
                  onClick={(prop) => {
                    setState(prop)
                  }}
                  {...item}/>
              </div>))
          }
        </Slider>
      </div>
      <Parallax className={'review_left-bg'} y={[-15, 25]}>
        <img src={tomato} alt="tomato"/>
      </Parallax>
    </div>
    <ReviewPopup
      open={state.modalOpen}
      {...state.review}
      onClose={() => {
        setState({
          modalOpen: false,
          review: null,
        })
      }}
    />
  </div>)
}


export default Reviews