import "./NavBar.css";
import metaLogo from "../images/metabnbLogo.png";
import ConnectWalletBtn from "./ConnectWalletBtn";

import React from "react";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <img src={metaLogo} alt="" />
      </div>
      <div className="navbar-list">
        <ul>
          <li>Home</li>
          <li>Place to stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
      </div>
      <div className="connect-to-wallet">
        <ConnectWalletBtn />
      </div>
    </div>
  );
}

export default NavBar;
