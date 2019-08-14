import React from "react"
import Container from "../container"
import IconFacebook from "../../images/icon-facebook.svg"
import IconTwitter from "../../images/icon-twitter.svg"
import IconLinkedin from "../../images/icon-linkedin.svg"
import IconInstagram from "../../images/icon-instagram.svg"
import IconYoutube from "../../images/icon-youtube.svg"
import IOSBtn from "../../images/ios-btn.svg"
import GooglePlayBtn from "../../images/google-play-btn.svg"
import Logo from '../../images/logo-monocolor.svg'

export const Footer = () => (<footer className={"footer"}>
  <Container className={'footer_container'}>
    <div className="footer_left">
      <div className="footer_logo">
        <img src={Logo} alt="" className="footer_logo-img"/>
      </div>

      <div className="footer_store-btn-group">
        <button className={"button_primary button_primary--medium"}>
          <img className={"button_primary-img "} src={IOSBtn} alt=""/>
        </button>
        <button className={"button_primary button_primary--medium"}>
          <img className={"button_primary-img "} src={GooglePlayBtn} alt=""/>
        </button>
      </div>
    </div>


    <div className="footer_social-group">
      <a href={""} className="button_primary button_primary--medium">
        <img src={IconFacebook} alt=""/>
      </a>
      <a href={""} className="button_primary button_primary--medium">
        <img src={IconTwitter} alt=""/>
      </a>
      <a href={""} className="button_primary button_primary--medium">
        <img src={IconLinkedin} alt=""/>
      </a>
      <a href={""} className="button_primary button_primary--medium">
        <img src={IconInstagram} alt=""/>
      </a>
      <a href={""} className="button_primary button_primary--medium">
        <img src={IconYoutube} alt=""/>
      </a>
    </div>

  </Container>
</footer>)

export default Footer