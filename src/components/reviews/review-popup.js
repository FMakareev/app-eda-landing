import React, { Fragment } from "react"
import { SkyLightStateless } from "react-skylight"
import classNames from "classnames"
import ReviewRating from "./review-rating"
import IconClose from "../../images/icon-close.svg"
import Scrollbars from "react-custom-scrollbars"


export const ReviewPopup = ({
                              open,
                              onClose,
                              author,
                              rating,
                              comment,
                            }) => {
  let autoHeightMax = 400
  try {
    if (window !== null) {
      if (window.matchMedia("(orientation: landscape)").matches) {
        if (window.innerWidth <= 600) {
          autoHeightMax = 155
        } else if (window.innerWidth <= 768) {
          autoHeightMax = 210
        } else if (window.innerWidth <= 812) {
          autoHeightMax = 240
        } else if (
          window.innerWidth < 768) {
          autoHeightMax = 360
        }
        console.log("(orientation: landscape)", autoHeightMax)

      } else if (window.matchMedia("(orientation: portrait)").matches) {
        if (
          window.innerWidth < 768) {
          autoHeightMax = 360
        }
        console.log("(orientation: portrait)", autoHeightMax)
      }
    }
  } catch (e) {
    console.log(e)
  }

  return (
    <Fragment>
      <button
        aria-label="закрыть"
        onClick={onClose}
        className={classNames("button review-popup_close-btn", {
          "review-popup_close-btn--hidden": !open,
        })}>
        <img src={IconClose} alt=""/>
      </button>
      <SkyLightStateless
        isVisible={open}
        onCloseClicked={onClose}
        onOverlayClicked={onClose}
      >
        <div className="review-popup_top">
          <h6 className="review-card_name title_h5">
            {author}
          </h6>
          <ReviewRating count={rating}/>
        </div>
        <Scrollbars
          autoHeight
          autoHeightMin={155}
          autoHeightMax={autoHeightMax}
          hideTracksWhenNotNeeded={true}
        >
          <div className="review-popup_comment">
            {comment}
          </div>
        </Scrollbars>
      </SkyLightStateless>
    </Fragment>)
}

export default ReviewPopup