import React from "react";
import Show from "./Show";
import shows from "../../assets/shows.json";
import "./ShowsContainer.css";

const ShowsContainer = () => {
  return (
    <div className="show-container">
      {shows.map((show) => {
        return <Show show={show} key={show.id} />;
      })}
    </div>
  );
};

export default ShowsContainer;