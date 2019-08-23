import React from "react"
import classNames from 'classnames';
import iphone from "../../../static/images/iphone-img.png"
import StoreButtonGroup from "../storeButtonGroup"

const FeaturesItem = ({title,content,image,id, className, contentChildren}) => {
  return (
    <div id={id} className={classNames("features_container","features_animation")}>
      <div className="features_picture">
        <img src={iphone} alt={iphone} className="features_picture-img"/>
      </div>
      <div className="features_content">
        <h3 className="title_h3 features_content-title">
          {title}
        </h3>
        <p className="features_content-text">
          {content}
        </p>
        {contentChildren}
        <StoreButtonGroup
          className={'features_store-btn-wrapper'}
          buttonClassNames={'button_primary--medium'}
        />
        <StoreButtonGroup
          className={'features_store-btn-wrapper features_store-btn-wrapper--mobile'}
          buttonClassNames={'button_primary--large'}
        />
      </div>
    </div>
  )
}

export default FeaturesItem