import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ShowCard.css";
const ShowCard = () => {
  const [shows, setShow] = useState([]);
  useEffect(() => {
    const fetchAllshows = async () => {
      try {
        const res = await axios.get("http://localhost:3000/shows");
        setShow(res.data);
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllshows()
  }, [])
  return (
    <>
      {shows.map((show) => (
        <div className="show-card-container" key={show.id_funcion} onClick={()=>{console.log(show.id_funcion)}}>
          <div className="title-show">
            <span>{show.nombre}</span>
            <span>{(show.fecha).substring(0,10)}</span>
          </div>
          <img src={`https://res.cloudinary.com/dex17d0p4/image/upload${show.imagen}`} alt="" />
          <p>{show.descripcion}</p>
        </div>
      ))}
    </>
  );
};

export default ShowCard;
