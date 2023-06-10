import React, { useState } from "react";
import "./NavBar.css"
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
const Navbar = () => {
  const [activelink, setActiveLink] = useState("/");
  const navigate = useNavigate();
  const handleClick = (text) => {
    setActiveLink(text);
    navigate(text);
  };
  const getNavClass = (path) => {
    return activelink == path ? "nav-active" : "nav";
  };
  return (
    <div className="navbar">
      <Button
        css={getNavClass("/")}
        onClick={() => handleClick("/")}
        icon={"material-symbols:home-outline"}
        iconcss={"icon"}
        text={"Home"}
      />
      <Button
        css={getNavClass("/dish")}
        onClick={() => handleClick("/dish")}
        icon={"fluent-emoji-high-contrast:fork-and-knife-with-plate"}
        iconcss={"icon"}
        text={"Dish"}
      />
      <Button
        css={getNavClass("/table")}
        onClick={() => handleClick("/table")}
        icon={"material-symbols:table-bar-outline-sharp"}
        iconcss={"icon"}
        text={"Table"}
      />
      <Button
        css={getNavClass("/profile")}
        onClick={() => handleClick("/profile")}
        icon={"material-symbols:person-outline-rounded"}
        iconcss={"icon"}
        text={"Profile"}
      />
    </div>
  );
};

export default Navbar;


// import React from 'react'
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from '../atoms/Button'
// import './NavBar.css'

// export const NavBar = () => {

//   const [activeOption, setActiveOption] = useState('/');
//   const navigate = useNavigate();
//   const handleOptionClick = (option) => {
//     setActiveOption(option)
//     navigate(option)
//   };
//   const isOptionActive = (path) => {
//     return activeOption == path ? "active" : "no-active"
//   };

//   return (
//     <div className='navbar'>
//       <Button
//         icon={"material-symbols:home-outline-rounded"}
//         name={"Home"}
//         click={() => handleOptionClick("/")}
//         estilo = {isOptionActive("/")}
//       />

//       <Button
//         icon={"fluent-emoji-high-contrast:fork-and-knife-with-plate"}
//         name={"Dish"}
//         click={() => handleOptionClick("/dish")}
//         estilo = {isOptionActive("/dish")}
//       />

//       <Button
//         icon={"material-symbols:table-bar-outline-sharp"}
//         name={"Table"}
//         click={() => handleOptionClick("/table")}
//         estilo = {isOptionActive("/table")}
//       />

//       <Button
//         icon={"material-symbols:person-outline-rounded"}
//         name={"Profile"}
//         click={() => handleOptionClick("/profile")}
//         estilo = {isOptionActive("/profile")}
//       />
//     </div>
//   )
// }
