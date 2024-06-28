import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footerContainer">
        <div className="logoContainer">
          <img className="logo" src="logo-magyarrigo.svg" alt="logoOfCompany" />
        </div>
        <div className="footerContainerButtons">
          <a className="footerButton" href="#description">
            DESCRIPTION
          </a>
          <a className="footerButton" href="#converter">
            CONVERTER
          </a>
        </div>

        <div className="footerContainerContact">
          <div className="meansOfContact" id="phone">
            <FontAwesomeIcon icon={faPhone} color="white" />
            <a className="contact" href="tel:+48535062908">
              +48 535 062 908
            </a>
          </div>
          <div className="meansOfContact" id="mail">
            <FontAwesomeIcon icon={faEnvelope} color="white" />
            <a className="contact" href="mailto:b.drozd07@gmail.com">
              b.drozd07@gmail.com
            </a>
          </div>
        </div>
        <div className="footerContainerMediaIcons">
          <FontAwesomeIcon icon={faTwitter} color="white" />
          <FontAwesomeIcon icon={faFacebook} color="white" />
          <FontAwesomeIcon icon={faTiktok} color="white" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
