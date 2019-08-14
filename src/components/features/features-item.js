import React from "react"
import iphone from "../../../static/images/iphone-img.png"

const FeaturesItem = ({title,content,image}) => {
  return (
    <div className="features_container">
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
      </div>
    </div>
  )
}

export default FeaturesItem