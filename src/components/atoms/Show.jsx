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
        <span className="show-dance">{show.nombre}</span>
        <span className="show-date">{show.fecha}</span>
      </span>
      <span className="show-image">
        <img src={show.imagen} alt="" />
      </span>
      <span className="show-description">{show.descripcion}</span>
    </button>
  );
};

export default Show;
