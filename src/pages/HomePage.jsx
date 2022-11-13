import "./HomePage.css";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="homepage-hero">
        <div>
          <div className="hero-rent-text">
            <p className="homepage-hero-rent">
              Rent a <span className="purple-text">Place</span> away from
              <span className="purple-text"> Home</span> in the
              <span className="purple-text"> Metaverse</span>
            </p>
            <p>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default HomePage;
