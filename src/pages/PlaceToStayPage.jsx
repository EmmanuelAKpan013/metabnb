import { useState } from "react";
import "./PlaceToStayPage.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import filterIcon from "../images/placetostay/filterIcon.svg";
import Card from "../components/Card";

function PlaceToStayPage({ placeNftData }) {
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => {
    setDropDown(!dropDown);
    console.log(dropDown);
  };

  return (
    <>
      <div className="place-nav-container">
        <NavBar />
      </div>
      {/* desktop view */}
      <div className="list-container">
        <div className="listings">
          <ul className="short-list">
            <li>Resturant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>fantast city</li>
            <li>beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
            <li>
              <div className="list-location">
                <p>Location</p>
                <img src={filterIcon} alt="" />
                <div></div>
              </div>
            </li>
          </ul>
        </div>

        {/* element tags for mobile view */}
        <div className="listings-mobile">
          <div className="dropdown " onClick={handleClick}>
            <p>Places</p>

            {dropDown ? (
              <div className="places-list">
                <ul>
                  <li>Resturant</li>
                  <li>Cottage</li>
                  <li>Castle</li>
                  <li>fantast city</li>
                  <li>beach</li>
                  <li>Carbins</li>
                  <li>Off-grid</li>
                  <li>Farm</li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className="list-location">
            <p>Location</p>
            <img src={filterIcon} alt="" />
            <div></div>
          </div>
        </div>
      </div>

      <div className="place-nft-container">
        <Card placeNftData={placeNftData} />
      </div>
      <div className="homepage-footer-container">
        <Footer />
      </div>
    </>
  );
}

export default PlaceToStayPage;
