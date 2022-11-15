import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlaceToStayPage from "./pages/PlaceToStayPage";

function App() {
  const homeNft = [
    {
      image: "nft-images/nft-1.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-2.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-3.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-4.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-5.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-6.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-7.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-8.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
  ];

  const placeNft = [
    {
      image: "nft-images/nft-5.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-6.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-7.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-8.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-1.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-2.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-3.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-4.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-9.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-10.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-11.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-12.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-13.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-14.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-15.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
    {
      image: "nft-images/nft-16.png",
      name: "Desert King",
      quantity: "1MBT per night",
      distance: "2345km away",
      availability: "available for 2weeks stay",
      rating: "nft-images/star.png",
    },
  ];
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage homeNftData={homeNft} />} />
          <Route
            path="/placetostay"
            element={<PlaceToStayPage placeNftData={placeNft} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
