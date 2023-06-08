import React, { useState } from "react";
import "./Navbar.css";
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
