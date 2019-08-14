import React from "react";
import classNames from "classnames";

export const Button = ({ children, className,variant, mods, size, ...rest }) => (<button
  className={classNames(className,{
    "button_slider-arrow": variant === "slider",
    "button_primary": variant === "primary",
    "button_primary--medium": size === "medium",
    "button_primary--large": size === "large",
    "button_slider-arrow--left": mods === "slider--left",
    "button_slider-arrow--right": mods === "slider--right",
  })}
  {...rest}
>
  {children}
</button>)

export default Button