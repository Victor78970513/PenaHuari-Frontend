import React from "react";
import "./Show.css";
const Show = (props) => {
  const show = props.show;
  const handleClick = () => {
    console.log("shows");
  };
  return (
    <button onClick={handleClick} className="show-card">
      <span className="show-title">
        <span className="show-dance">{show.show_name}</span>
        <span className="show-date">{show.show_date}</span>
      </span>
      <span className="show-image">
        <img src={show.show_image} alt="" />
      </span>
      <span className="show-description">{show.show_description}</span>
    </button>
  );
};

export default Show;
