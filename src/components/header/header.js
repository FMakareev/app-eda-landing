import React from "react"
import { Parallax } from "react-scroll-parallax"

import Logo from "../../images/logo.svg"
import GooglePlayBtn from "../../images/google-play-btn.svg"
import Button from "../button"
import Container from "../container"
import tomato from "../../../static/images/1-tomato-img.jpg"
import pepper from "../../../static/images/pepper-img.jpg"
import StoreButtonGroup from "../storeButtonGroup"

export const Header = () => (<header className={"header"}>
  <Container>
    <Parallax className="header_left-bg" y={[-100, 100]} x={[0, "50%"]} tagOuter="figure">
      <img src={tomato} alt={"томат"}/>
    </Parallax>
    <div className="header_top">
      <div className="header_logo">
        <img src={Logo} alt="" className="header_logo-img"/>
      </div>

      <StoreButtonGroup
        className={'header_btn-group'}
        buttonClassNames={'button_primary--medium'}
      />
    </div>
    <h1 className={"title_h1 header_title"}>
      Мобильное приложение телеканала Еда
    </h1>
  </Container>

  <Parallax className="header_right-bg" y={[-100, 100]} x={["50%", 0]} tagOuter="figure">
    <img src={pepper} alt={"перец"}/>
  </Parallax>
</header>)

export default Header