import React from 'react'
import "./Drinks.css"
export const Drinks = (props) => {
    const drinks = props.drinks
    const handleClick = () => {
        console.log("Drinks")
    }
  return (
    <button onclik={handleClick} className='drinks-conteiner'>
        <span className='drinks-title'>{platos.name}</span>
        <span className='drinks-image'>
            <img src ={platos.imgsrc} alt=" " />
        </span>
            
    </button>
  )
}

export default Drinks