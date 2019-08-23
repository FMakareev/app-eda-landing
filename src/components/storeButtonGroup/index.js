import React from "react"
import classNames from "classnames"

import IOSBtn from "../../images/ios-btn.svg"
import GooglePlayBtn from "../../images/google-play-btn.svg"
import Config from "../../config"

const DeviceDetected = typeof window === "object" ? require("current-device").default : null


export const StoreButtonGroup = ({ className, buttonClassNames, disableIOS, disableAndroid }) => {

  return (<div className={classNames(className)}>
    {
      !disableIOS &&
      <a rel="noopener" aria-label="ссылка на приложение в itunes"  href={Config.storeLink.ios} target={"_blank"} className={classNames("button_primary", buttonClassNames)}>
        <img className={"button_primary-img"} src={IOSBtn} alt=""/>
      </a>
    }
    {
      !disableAndroid &&
      <a rel="noopener" aria-label="ссылка на приложение в google play" href={Config.storeLink.android} target={"_blank"} className={classNames("button_primary", buttonClassNames)}>
        <img className={"button_primary-img "} src={GooglePlayBtn} alt=""/>
      </a>
    }
  </div>)
}
StoreButtonGroup.defaultProps = {
  disableIOS: DeviceDetected && !(DeviceDetected.desktop() || DeviceDetected.ios()),
  disableAndroid: DeviceDetected && !(DeviceDetected.desktop() || DeviceDetected.android()),
}

export default StoreButtonGroup

