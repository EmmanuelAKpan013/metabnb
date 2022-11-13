import "./Card.css";
import data from "../data/data.json";
import testImg from "../images/test.png";
import starImg from "../images/star.png";

function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card-image">
          <img src={testImg} alt="nft--img" />
        </div>
        <div className="card-details">
          <p>Desert King</p>
          <p>1MBT per night</p>
        </div>
        <div className="card-details">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        <div className="star-container">
          <img src={starImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Card;
