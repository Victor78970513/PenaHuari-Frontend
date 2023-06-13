import React from "react";
import IconButton from "../atoms/IconButton";
import "./TopBar.css"
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate()
  const onPressed = (text) =>{
    console.log(`ESTOY FUNCIONANDO ${text}`);
    navigate(text)
  }

  return (
    <div className="top-bar">
      <IconButton css={"top-bar-button"} icon={"fa6-solid:masks-theater"} onClick={()=>onPressed("/shows")}/>
      <span>Peña-Res</span>
      <IconButton css={"top-bar-button"} icon={"zondicons:location"} onClick={()=>onPressed("/location")}/>
    </div>
  );
};

export default TopBar;
