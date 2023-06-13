import React from 'react'
import ingredientes from '../../assets/ingredients.json'
import "./IngredientList.css"
const IngredientList = () => {
  return (
    <div className='list-container'>
        {
            ingredientes.map((elemento)=>(
                    <img  key={elemento.id} src={elemento.url} alt="" />
            ))
        }
    </div>
  )
}

export default IngredientList