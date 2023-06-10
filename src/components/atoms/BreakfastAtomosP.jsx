import React from 'react'
import "./BreakfastAtomosP.css"

export const BreakfastAtomosP = (props) => {
    const desayuno = props.desayuno
    const handleClick = ()=>{
        console.log("Desayuno")
    }
    return (
    <button onClick={handleClick} className='desayuno-conteiner'>
        <div className='desayuno-title'>{desayuno.nombre}</div>
        <div className='desayuno-image'>
            <img src={desayuno.imagen} alt=''/>

        </div>
    </button>
  )
}

export default BreakfastAtomosP