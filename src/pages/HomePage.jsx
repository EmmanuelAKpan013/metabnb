import "./HomePage.css";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import heroImgOne from "../images/hero-section/image 1.png";
import heroImgTwo from "../images/hero-section/image 2.png";
import heroImgThree from "../images/hero-section/image 3.png";
import heroImgFour from "../images/hero-section/image 4.png";
import openseaLogo from "../images/logos-opensea/opensea.svg";
import metamaskLogo from "../images/logos-opensea/metamask.svg";
import mbtokenLogo from "../images/logos-opensea/mbtoken.svg";
import threepics from "../images/threepics.png";

function HomePage({ homeNftData }) {
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
      <div className="inspiration">
        <p>Inspiration for your next adventure</p>
        <div className="nft-container">
          <Card homeNftData={homeNftData} />
        </div>
      </div>
      <div className="nft-learn-more">
        <div className="metabnb-learn">
          <p className="nft-text">Metabnb NFTs</p>
          <p className="small">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <br />
          <br />
          <button className="btn-learn">Learn more</button>
        </div>
        <div className="metabnb-learn-img">
          <img src={threepics} alt="" />
        </div>
      </div>
      <div className="homepage-footer-container">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
