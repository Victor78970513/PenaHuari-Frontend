import React from 'react'
import "./Desayuno.css"

export const Desayuno = (props) => {
    const desayunoB = props.desayuno
    const handleClick = ()=>{
        console.log("Desayuno")
    }
    return (
    <button onClick={handleClick} className='desayuno-conteiner'>
        <span className='desayuno-title'>{desayunoB.name}</span>
        <span className='desayuno-image'>
            <img src={desayunoB.imgsrc} alt=''/>

        </span>
    </button>
  )
}

export default Desayuno