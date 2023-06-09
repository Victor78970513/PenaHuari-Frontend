import React from 'react'
import "./Platos.css"

export const Platos = (props) => {
    const platos = props.platos
    const handleClick =() =>{
        console.log("Platos")
    }
    return (
        <button onclik={handleClick} className='platos-conteiner'>
            <span className='plato-title'>{platos.name}</span>
            <span className='plato-image'>
                <img src ={platos.imgsrc} alt=" " />
            </span>
            
        </button>
    )
}
export default Platos
