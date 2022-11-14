import { Link } from "react-router-dom";
import "./NavBar.css";
import metaLogo from "../images/metabnbLogo.png";
import ConnectWalletBtn from "./ConnectWalletBtn";

function NavBar() {
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
      <div className="connect-to-wallet">
        <ConnectWalletBtn />
      </div>
    </div>
  );
}

export default NavBar;
