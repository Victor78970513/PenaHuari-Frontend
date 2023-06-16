import React from "react";
import ingredientes from "../../assets/ingredients.json";
import "./IngredientList.css";
const IngredientList = ({onIngredientClick,onClearClick}) => {
  const handleIngredientClick = (idIngrediente) => {
    onClearClick();
    onIngredientClick(idIngrediente);
  };
  return (
    <div className="list-container">
      {ingredientes.map((elemento) => (
        <img
          key={elemento.id}
          src={elemento.url}
          alt=""
          onClick={() => handleIngredientClick(elemento.id)}
        />
      ))}
    </div>
  );
};

export default IngredientList;
