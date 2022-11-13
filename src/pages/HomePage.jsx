import "./HomePage.css";
import NavBar from "../components/NavBar";
import heroImgOne from "../images/hero-section/image 1.png";
import heroImgTwo from "../images/hero-section/image 2.png";
import heroImgThree from "../images/hero-section/image 3.png";
import heroImgFour from "../images/hero-section/image 4.png";
import openseaLogo from "../images/logos-opensea/opensea.svg";
import metamaskLogo from "../images/logos-opensea/metamask.svg";
import mbtokenLogo from "../images/logos-opensea/mbtoken.svg";

function HomePage() {
  return (
    <>
      <div className="homepage-nav-container">
        <NavBar />
      </div>
      <div className="homepage-hero">
        <div className="hero-rent-text">
          <p className="homepage-hero-rent">
            Rent a <span className="purple-text">Place</span> away from
            <span className="purple-text"> Home</span> in the
            <span className="purple-text"> Metaverse</span>
          </p>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="hero-search-section">
            <form action="">
              <input
                type="text"
                name="searchlocation"
                id="searchlocation"
                placeholder="search for location"
                className="search-location-field"
              />
              <button type="submit" className="searchbtn">
                search
              </button>
            </form>
          </div>
        </div>
        <div className="homepage-hero-images">
          <div className="hero-img-one">
            <div>
              <img src={heroImgOne} alt="" />
            </div>
            <div>
              <img src={heroImgTwo} alt="" />
            </div>
          </div>

          <div className="hero-img-two">
            <div>
              <img src={heroImgThree} alt="" />
            </div>
            <div>
              <img src={heroImgFour} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="logos">
        <div>
          <img src={mbtokenLogo} alt="" />
        </div>
        <div>
          <img src={metamaskLogo} alt="" />
        </div>
        <div>
          <img src={openseaLogo} alt="" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
