import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '../atoms/Button'
import './NavBar.css'

export const NavBar = () => {

  const [activeOption, setActiveOption] = useState('/');
  const navigate = useNavigate();
  const handleOptionClick = (option) => {
    setActiveOption(option)
    navigate(option)
  };
  const isOptionActive = (path) => {
    return activeOption == path ? "active" : "no-active"
  };

  return (
    <div className='navbar'>
      <Button
        icon={"material-symbols:home-outline-rounded"}
        name={"Home"}
        click={() => handleOptionClick("/")}
        estilo = {isOptionActive("/")}
      />

      <Button
        icon={"fluent-emoji-high-contrast:fork-and-knife-with-plate"}
        name={"Dish"}
        click={() => handleOptionClick("/dish")}
        estilo = {isOptionActive("/dish")}
      />

      <Button
        icon={"material-symbols:table-bar-outline-sharp"}
        name={"Table"}
        click={() => handleOptionClick("/table")}
        estilo = {isOptionActive("/table")}
      />

      <Button
        icon={"material-symbols:person-outline-rounded"}
        name={"Profile"}
        click={() => handleOptionClick("/profile")}
        estilo = {isOptionActive("/profile")}
      />
    </div>
  )
}
