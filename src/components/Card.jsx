import "./Card.css";
import data from "../data/data.json";

function Card() {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="card-container">
            <div className="card-image">
              <img src={item.image} alt="nft--img" />
            </div>
            <div className="card-details">
              <p>{item.name}</p>
              <p className="night">
                <b>{item.quantity}</b>
              </p>
            </div>
            <div className="card-details">
              <p>{item.distance}</p>
              <p>{item.availability}</p>
            </div>
            <div className="star-container">
              <img src={item.rating} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
