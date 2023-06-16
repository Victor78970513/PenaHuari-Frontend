import React from "react";
import "./Section.css";
import SectionHeader from "../molecules/SectionHeader.jsx";
import Plato from "../atoms/Plato";
import { useNavigate } from "react-router-dom";
const Section = () => {
  const navigate = useNavigate();
  const onPressed = (text) => {
    console.log(`SECTION HEADER ${text}`);
  };
  return (
    <div className="section-container">
      <div className="title">
        <SectionHeader text={"All"} onClick={()=>onPressed("All")} icon={"game-icons:fork-knife-spoon"}/>
        <div className="platos">
          <Plato endpoint={"/platos"}/>
        </div>
      </div>

      <div className="title">
        <SectionHeader text={"Breakfast"} onClick={()=>navigate("/sectionDish")} icon={"mdi:free-breakfast-to-go-outline"}/>
        <div className="platos">
          <Plato endpoint={"/breakfast"}/>
        </div>
      </div>

      <div className="title">
        <SectionHeader text={"Lunch"} onClick={()=>navigate("/sectionDish")} icon={"icon-park-twotone:chicken"}/>
        <div className="platos">
          <Plato endpoint={"/lunch"}/>
        </div>
      </div>

      <div className="title">
        <SectionHeader text={"Dinner"} onClick={()=>navigate("/sectionDish")} icon={"lucide:soup"}/>
        <div className="platos">
          <Plato endpoint={"/dinner"}/>
        </div>
      </div>

      <div className="title">
        <SectionHeader text={"Drink"} onClick={()=>navigate("/sectionDish")} icon={"nimbus:drink"}/>
        <div className="platos">
          <Plato endpoint={"/drink"}/>
        </div>
      </div>

      <div className="title">
        <SectionHeader text={"Dessert"} onClick={()=>navigate("/sectionDish")} icon={"emojione-monotone:ice-cream"}/>
        <div className="platos">
          <Plato endpoint={"/dessert"}/>
        </div>
      </div>
    </div>
  );
};

export default Section;
