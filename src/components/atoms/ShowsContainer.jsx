import React from "react";
import Show from "./Show";
import "./ShowsContainer.css";

const ShowsContainer = ({shows}) => {
  return (
    <div className="show-container">
      {shows.map((show, index) => {
        return <Show show={show} key={index}/>;
      })}
    </div>
  );
};

export default ShowsContainer;