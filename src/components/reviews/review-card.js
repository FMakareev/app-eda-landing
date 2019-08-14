import React, { Fragment } from "react"
import IconIOS from "../../images/icon-apple.svg"
import IconAndroid from "../../images/icon-android.svg"
import ReviewRating from "./review-rating"
import ReviewPopup from "./review-popup"


export const ReviewCard = ({
                             author,
                             rating,
                             comment,
                             platform,
                             storeLink,
                             onClick,
                           }) => (<div className="review-card_wrapper">
  <div className="review-card_top">
    <h6 className="review-card_name title_h6">
      {author}
    </h6>
    <ReviewRating count={rating}/>
  </div>
  <div className="review-card_content">
    {comment && comment.substr(0, 170)}
    {
      comment && comment.length > 170 && (<button onClick={() => onClick({
        modalOpen: true,
        review: {
          author,
          rating,
          comment,
          platform,
          storeLink,
        },
      })} className="button review-card_more-btn">еще</button>)
    }
  </div>
  <div className="review-card_bottom">
    <div className="review-card_platform-icon">
      {
        platform === "android" &&
        <img src={IconAndroid} className="review-card_platform-icon-image" alt=""/>
      }
      {
        platform === "ios" &&
        <img src={IconIOS} className="review-card_platform-icon-image" alt=""/>
      }
    </div>
    <a href={storeLink} className="button_link review-card_store-link">
      Открыть в магазине приложений
    </a>
  </div>
</div>)

export default ReviewCard