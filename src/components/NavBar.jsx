// import {useState} from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";
import metaLogo from "../images/metabnbLogo.png";
import ConnectWalletBtn from "./ConnectWalletBtn";
import hamburgerMenuIcon from "../images/hamburger-menu.png";

function NavBar() {
  // const [openHamburger, setOpenHamburger] = useState(false)

  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <img src={metaLogo} alt="" />
      </div>
      <div className="navbar-list">
        <ul>
          <Link className="nav-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="nav-link" to="/placetostay">
            <li>Place to stay</li>
          </Link>
          <Link className="nav-link" to="/">
            <li>NFTs</li>
          </Link>
          <Link className="nav-link" to="/">
            <li>Community</li>
          </Link>
        </ul>
      </div>
      {/* <div className="connect-to-wallet">
        <ConnectWalletBtn />
      </div> */}
      {/* <div className="hamburger-container">
        <img src={hamburgerMenuIcon} alt="" className="ham-icon" />
      </div> */}
    </div>
  );
}

export default NavBar;
