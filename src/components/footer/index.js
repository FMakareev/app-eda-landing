import React from "react"
import Container from "../container"
import IconFacebook from "../../images/icon-facebook.svg"
import IconTwitter from "../../images/icon-twitter.svg"
import IconLinkedin from "../../images/icon-linkedin.svg"
import IconInstagram from "../../images/icon-instagram.svg"
import IconYoutube from "../../images/icon-youtube.svg"

import Logo from '../../images/logo-monocolor.svg'
import StoreButtonGroup from "../storeButtonGroup"
import Config from "../../config"

export const Footer = () => (<footer className={"footer"}>
  <Container className={'footer_container'}>
    <div className="footer_left">
      <div className="footer_logo">
        <img src={Logo} alt="logo" className="footer_logo-img"/>
      </div>
      <StoreButtonGroup
        className={"footer_store-btn-group"}
        buttonClassNames={'button_primary--medium'}
      />
    </div>


    <div className="footer_social-group">
      <a rel="noopener" aria-label="ссылка на facebook" href={Config.socialLinks.facebook} className="button_primary button_primary--medium">
        <img src={IconFacebook} alt=""/>
      </a>
      <a rel="noopener" aria-label="ссылка на twitter" href={Config.socialLinks.twitter} className="button_primary button_primary--medium">
        <img src={IconTwitter} alt=""/>
      </a>
      <a rel="noopener" aria-label="ссылка на linkedin" href={Config.socialLinks.linkedin} className="button_primary button_primary--medium">
        <img src={IconLinkedin} alt=""/>
      </a>
      <a rel="noopener" aria-label="ссылка на instagram" href={Config.socialLinks.instagram} className="button_primary button_primary--medium">
        <img src={IconInstagram} alt=""/>
      </a>
      <a rel="noopener" aria-label="ссылка на youtube" href={Config.socialLinks.youtube} className="button_primary button_primary--medium">
        <img src={IconYoutube} alt=""/>
      </a>
    </div>

  </Container>
</footer>)

export default Footer