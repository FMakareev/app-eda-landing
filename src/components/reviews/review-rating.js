import React from "react"
import IconStart from "../../images/icon-star.svg"
import Range from "../../utils/range"


export const ReviewRating = ({ count = 5 }) => (<div className="review-card_rating">
  {
    Range(count).map((_, index) => (
      <img key={`ReviewRating-${index}`} className={"review-card_rating-star"} src={IconStart} alt=""/>
    ))
  }
</div>)


export default ReviewRating