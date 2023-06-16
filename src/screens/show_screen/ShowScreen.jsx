import React from "react";
import MapTopBar from "../../components/molecules/MapTopBar.jsx";
import "./ShowScreen.css";
import ShowCard from "../../components/molecules/ShowCard.jsx";
const ShowScreen = () => {
  return (
    <div className="show-screen">
      <MapTopBar text={"Shows"} css={"show-topbar"} />
      <div className="show-section">
        <ShowCard />
      </div>
    </div>
  );
};

export default ShowScreen;
