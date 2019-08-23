import React from "react"
import classNames from "classnames"
import FeaturesItem from "./features-item"
import Button from "../button"
import FeaturesMock from "../../mockup/features"
import FeaturesBg from "./features-bg"


const onExit = "onExit";
const onEnter = "onEnter";
function reducer(state, action) {
  switch (action.type) {
    case onExit:
      return {
        in: false
      };
    case onEnter:
      return {
        in: true
      };
    default:
      throw new Error();
  }
}

export const Features = () => {

  const [state, setState] = new React.useState({
    active: 0,
    state: 'idol',
  })

  const [animState, dispatch] = new React.useReducer(reducer, {
    in: true
  });

  React.useEffect(() => {
    if (animState.in === false) {
      dispatch({
        type: onEnter
      });
      const element = document.getElementById('features_animation');
      element.classList.remove("features_animation");

      void element.offsetWidth;
      element.classList.add("features_animation");
    }
  });
  return (
    <div className={"features_wrapper"}>
      <Button
        aria-label="предыдущее превью"
        onClick={() => {
          if (state.active > 0) {
            setState({
              ...state,
              active: state.active - 1,
            })
          } else {
            setState({
              ...state,
              active: FeaturesMock.length - 1,
            })
          }
          dispatch({
            type: onExit
          });
        }}
        className={"features_slider-arrow features_slider-arrow--left"} mods={"slider--left"} variant={"slider"}/>
      <Button
        aria-label="следующее превью"
        onClick={() => {
          if (state.active < FeaturesMock.length - 1) {
            setState({
              ...state,
              active: state.active + 1,
            })
          } else {
            setState({
              ...state,
              active: 0,
            })
          }
          dispatch({
            type: onExit
          });
        }}
        className={"features_slider-arrow features_slider-arrow--right"}
        mods={"slider--right"}
        variant={"slider"}
      />

      <FeaturesBg/>

      <FeaturesItem
        id={'features_animation'}
        className={'features_animation'}
        contentChildren={<div>
          <ul className="features_slider-pagination-list">
            {
              FeaturesMock.map((_, index) => (
                <li
                  onClick={() => {
                    setState({
                      active: index,
                    })
                    dispatch({
                      type: onExit
                    });
                  }}
                  className={classNames("features_slider-pagination-item", {
                    " features_slider-pagination-item--active": index === state.active,
                  })}
                >
                  {index + 1}
                </li>))
            }
          </ul>
        </div>}
        {...FeaturesMock[state.active]}
      />

    </div>
  )
}

export default Features