import React from 'react'
import { useNavigate } from 'react-router'
import IconButton from '../atoms/IconButton';
import "./MapTopBar.css"
const MapTopBar = ({text,css}) => {
    const navigate = useNavigate();
    const handleClick=(text)=>{
        navigate(text);
    };
  return (
    <div className={css}>
        <IconButton
            css={"location-icon"}
            icon={"ion:arrow-back"}
            onClick={()=>handleClick("/")}
        />
        <span>{text}</span>
    </div>
  )
}

export default MapTopBar