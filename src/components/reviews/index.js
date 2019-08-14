import React from "react"
import { asyncComponent } from 'react-async-component';
import Slider from "react-slick"

import ReviewCard from "./review-card"
import Button from "../button"
import ReviewList from "../../mockup/review"


const CarouselConfig = {
  dots: false,
  variableWidth: true,
  infinite: true,
  speed: 500,
  nextArrow: <Button mods={"slider--right"} variant={"slider"}/>,
  prevArrow: <Button mods={"slider--left"} variant={"slider"}/>,
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

// const ReviewPopup = React.lazy(() => import('./review-popup'));
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