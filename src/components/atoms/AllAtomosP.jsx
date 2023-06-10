import React from 'react'
import "./AllAtomosP.css"

export const AllAtomosP = (props) => {
    const place = props.place
    const handleClick =() =>{
        console.log("Platos")
    }
    return (
        <button onClick={handleClick} className='platos-conteiner'>
            <div className='plato-title'>{place.nombre}</div>
            <div className='plato-image'>
                <img src ={place.imagen} alt=" " />
            </div>
            
        </button>
    )
}
export default AllAtomosP
