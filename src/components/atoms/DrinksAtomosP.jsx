import React from 'react'
import "./DrinksAtomosP.css"

export const DrinksAtomosP = (props) => {
    const bebida = props.bebida
    const handleClick = () =>{
        console.log("Bebida")
    }
  return (
    <button onClick={handleClick} className='bebida-conteiner'>
        <div className='bebida-title'>{bebida.nombre}</div>
        <div className='bebida-image'>
            <img src ={bebida.imagen} alt=" " />
        </div>
            
    </button>
  )
}

export default DrinksAtomosP