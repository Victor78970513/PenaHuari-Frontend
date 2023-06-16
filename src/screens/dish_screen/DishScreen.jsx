import React, { useState } from "react";
import "./DishScreen.css";
import DishImage from "../../components/molecules/DishImage";
import IngredientList from "../../components/molecules/IngredientList";
import axios from "axios";
import SectionDishPlato from "../../components/atoms/SectionDishPlato";
const DishScreen = () => {
  const [platosIngrediente,setPlatosIngrediente]= useState([]);
  const buscarPlatosPorIngrediente = (idIngrediente) => {
    axios.get(`http://localhost:3000/platos/${idIngrediente}`)
    .then((res)=>{
      const platos = res.data.Platos;
      setPlatosIngrediente(platos);
    })
    .catch((err)=>{console.log(err)});
  }
  const limpiarPlatos = () =>{
    setPlatosIngrediente([]);
  };
  return (
    <div className='dish-container'>
      <DishImage/>
      <div className="ingredientes">
        <IngredientList onIngredientClick={buscarPlatosPorIngrediente} onClearClick={limpiarPlatos}/>
      </div>
      <div className="ingrediente-title">
        <span>Talvez estas buscando</span>
      </div>
      {
        platosIngrediente.length > 0 ?       <div className="platos-ingrediente">
        {
          platosIngrediente.map((plato)=>(
            <SectionDishPlato plato={plato} key={plato.id_comida}/>
          ))
        }
      </div>
      : <div className="no-ingredient-container">Selecciona un ingrediente</div>
      }
    </div>
  )
}

export default DishScreen
