import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '../atoms/Button'
import './NavBar.css'

export const NavBar = () => {

  // const [activeOption, setActiveOption] = useState('/');
  // const navigate = useNavigate();
  // const handleOptionClick = (option) => {
  //   setActiveOption(option)
  //   navigate(option)
  // };
  // const isOptionActive = (path) => {
  //   return activeOption == path ? "active" : "no-active"
  // };

  return (
    <div className='navbar'>
      <Button
        icon={"material-symbols:home-outline-rounded"}
        name={"Home"}
        // click={() => handleOptionClick("/")}
      />

      <Button
        icon={"fluent-emoji-high-contrast:fork-and-knife-with-plate"}
        name={"Dish"}
      />

      <Button
        icon={"material-symbols:table-bar-outline-sharp"}
        name={"Table"}
      />

      <Button
        icon={"material-symbols:person-outline-rounded"}
        name={"Profile"}
      />
    </div>
  )
}
