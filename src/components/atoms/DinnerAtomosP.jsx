import React from 'react'
import "./DinnerAtomosP.css"
export const DinnerAtomosP = (props) => {
    const dinner = props.dinner
    const handleClick = () =>{
        console.log("Dinners")
    }
  return (
    <button onClick={handleClick} className='dinner-conteiner'>
        <div className='dinner-title'>{dinner.nombre}</div>
        <div className='dinner-image'>
            <img src ={dinner.imagen} alt=" " />
        </div>
            
    </button>
  )
}

export default DinnerAtomosP