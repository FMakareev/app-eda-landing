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
                              ModalRef,
                            }) => {
  let autoHeightMax = 400
try{
  if (window !== null) {
    if (
      window.innerWidth < 768) {
      autoHeightMax = 360
    }
  }
} catch (e) {

}

  return (
    <Fragment>
      <button aria-label="закрыть" onClick={onClose} className={classNames("button review-popup_close-btn", {
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
          autoHeightMin={178}
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