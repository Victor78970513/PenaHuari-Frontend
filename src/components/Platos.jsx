import React from 'react'
import "./Platos.css"

export const Platos = (props) => {
    const platos = props.platos
    return (
        <div className='platos-conteiner'>
            <span>Charquekan</span>
            <img src ="../static/images/Charquekan.jpg" alt=" " />
        </div>
    )
}
export default Platos
