import React from "react"
import Container from "../container"
import IconFacebook from "../../images/icon-facebook.svg"
import IconInstagram from "../../images/icon-instagram.svg"
import IconYoutube from "../../images/icon-youtube.svg"
import IconVK from "../../images/vk-social-network-logo.svg"
import IconTelegram from "../../images/telegram-logo.svg"
import IconOdnoklassniki from "../../images/odnoklassniki-logo.svg"

import Logo from '../../images/logo-monocolor.svg'
import StoreButtonGroup from "../storeButtonGroup"
import Config from "../../config"

export const Footer = () => (<footer className={"footer"}>
  <Container className={'footer_container'}>
    <div className="footer_left">
      <a target={'_blank'} rel="noopener" href={'https://www.tveda.ru/'} className="footer_logo">
        <img src={Logo} alt="logo" className="footer_logo-img"/>
      </a>
      <StoreButtonGroup
        className={"footer_store-btn-group"}
        buttonClassNames={'button_primary--medium'}
      />
    </div>


    <div className="footer_social-group">
      <a target={'_blank'} rel="noopener" aria-label="ссылка на вконтакте" href={Config.socialLinks.vk} className="button_primary button_primary--medium">
        <img src={IconVK} alt=""/>
      </a>
      <a target={'_blank'} rel="noopener" aria-label="ссылка на facebook" href={Config.socialLinks.facebook} className="button_primary button_primary--medium">
        <img src={IconFacebook} alt=""/>
      </a>
      <a target={'_blank'} rel="noopener" aria-label="ссылка на вконтакте" href={Config.socialLinks.ok} className="button_primary button_primary--medium">
        <img src={IconOdnoklassniki} alt=""/>
      </a>
      <a target={'_blank'} rel="noopener" aria-label="ссылка на instagram" href={Config.socialLinks.instagram} className="button_primary button_primary--medium">
        <img src={IconInstagram} alt=""/>
      </a>
      <a target={'_blank'} rel="noopener" aria-label="ссылка на yandex zen" href={Config.socialLinks.zen} className="button_primary button_primary--medium">
        <svg width="11px" height="20px"  viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.64748 5.16778L1.88285 10.1793L0.402588 8.47663L6.1673 3.46509L7.64748 5.16778Z" fill="#FFF"/>
          <path d="M0.444083 0.436096L7.65642 2.91786V5.17398L0.444083 2.69226V0.436096ZM0.387695 8.47354L7.60007 10.9553V13.2114L0.387695 10.7297V8.47354Z" fill="#FFF"/>
        </svg>
      </a>
      <a target={'_blank'} rel="noopener" aria-label="ссылка на telegram" href={Config.socialLinks.telegram} className="button_primary button_primary--medium">
        <img src={IconTelegram} alt=""/>
      </a>
      <a target={'_blank'} rel="noopener" aria-label="ссылка на youtube" href={Config.socialLinks.youtube} className="button_primary button_primary--medium">
        <img src={IconYoutube} alt=""/>
      </a>
    </div>

  </Container>
</footer>)

export default Footer