import "./PlaceToStayPage.css";
import NavBar from "../components/NavBar";
import filterIcon from "../images/placetostay/filterIcon.svg";
import Card from "../components/Card";

function PlaceToStayPage({ placeNftData }) {
  return (
    <>
      <div className="place-nav-container">
        <NavBar />
      </div>
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
      </div>

      <div className="place-nft-container">
        <Card placeNftData={placeNftData} />
      </div>
    </>
  );
}

export default PlaceToStayPage;
