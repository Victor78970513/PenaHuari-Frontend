import React from 'react'
import "./Dinner.css"
export const Dinner = (props) => {
    const dinner = props.dinner
    const handleClick = () =>{
        console.log("Dinners")
    }
  return (
    <button onclik={handleClick} className='dinner-conteiner'>
        <span className='dinner-title'>{dinner.name}</span>
        <span className='dinner-image'>
            <img src ={dinner.imgsrc} alt=" " />
        </span>
            
    </button>
  )
}

export default Dinner