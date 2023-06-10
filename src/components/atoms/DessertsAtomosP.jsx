import React from 'react'
import "./DessertsAtomosP.css"

export const DessertsAtomosP = (props) => {
    const postre = props.postre
    const handleClick = () =>{
        console.log("Postres")
    }
  return (
    <button onClick={handleClick} className='postre-conteiner'>
        <div className='postre-title'>{postre.nombre}</div>
        <div className='postre-image'>
            <img src ={postre.imagen} alt=" " />
        </div>
            
    </button>
  )
}

export default DessertsAtomosP