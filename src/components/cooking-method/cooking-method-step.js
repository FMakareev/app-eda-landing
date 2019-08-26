import React from "react"
import { cookingProcessPropTypes } from "../../interfaces"

export const CookingMethodStep = ({
                                    text,
                                    image,
  index
                                  }) => (<li className="cooking-method_step">
  <div className="cooking-method_step-preview-wrapper">
    <div className="cooking-method_step-preview">
      <img
        className={"cooking-method_step-preview-img"}
        src={image}
        alt={`способ приготовления шаг ${index}`}
      />
    </div>
    <div className="cooking-method_step-count">
      1
    </div>
  </div>
  <div className="cooking-method_step-content">
   {text && text.replace(287)}
  </div>
</li>)

CookingMethodStep.propTypes = cookingProcessPropTypes;
export default CookingMethodStep