import "./Footer.css";
import blackMetaLogo from "../images/footer-images/metablacklogo.svg";
import facebookLogo from "../images/footer-images/facebook.png";
import instagramLogo from "../images/footer-images/instagram.png";
import twitterLogo from "../images/footer-images/twitter.png";
import copyright from "../images/footer-images/copyright.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <div className="footer-black-logo">
          <img src={blackMetaLogo} alt="" />
        </div>

        <div className="footer-social-icons">
          <div>
            <img src={facebookLogo} alt="" />
          </div>
          <div>
            <img src={instagramLogo} alt="" />
          </div>
          <div>
            <img src={twitterLogo} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <img src={copyright} alt="" /> <p>2022 Metabnb</p>
        </div>
      </div>
      <div className="footer-list">
        <ul>
          <li>
            <span className="list-header">Community</span>
          </li>
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
      </div>
      <div className="footer-list">
        <ul>
          <li>
            <span className="list-header">Places</span>
          </li>
          <li>Castle</li>
          <li>Farms </li>
          <li>Beach</li>
          <li>Learn more</li>
        </ul>
      </div>
      <div className="footer-list">
        <ul>
          <li>
            <span className="list-header">About us</span>
          </li>
          <li>Road map</li>
          <li>Creators </li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
