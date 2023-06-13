import React from "react";
import "./DishScreen.css";
import DishImage from "../../components/molecules/DishImage";
import IngredientList from "../../components/molecules/IngredientList";
const DishScreen = () => {
  return (
    <div className="dish-container">
      <DishImage />
      <div className="ingredientes">
        <IngredientList />
      </div>
    </div>
  );
};

export default DishScreen;
