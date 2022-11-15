import "./Card.css";

function Card({ homeNftData, placeNftData }) {
  return (
    <>
      {homeNftData &&
        homeNftData.map((item, index) => {
          return (
            <div className="card-container" key={index}>
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

      {placeNftData &&
        placeNftData.map((item, index) => {
          return (
            <div className="card-container" key={index}>
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
