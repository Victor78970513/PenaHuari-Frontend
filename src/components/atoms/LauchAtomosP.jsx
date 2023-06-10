import React from 'react'
import "./LauchAtomosP.css"
export  const LauchAtomosP = (props) => {
    const lunch = props.lunch
    const handleClick = () =>{
        console.log("Lunchs")
    }
  return (
    <button onClick={handleClick} className='lunchs-conteiner'>
        <div className='lunch-title'>{lunch.nombre}</div>
        <div className='lunch-image'>
            <img src = {lunch.imagen} alt=''/>
        </div>

    </button>
  )
}

export default LauchAtomosP