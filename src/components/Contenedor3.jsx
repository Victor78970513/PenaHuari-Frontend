import React from 'react'
import "./Contenedor3.css"
import Platos from './Platos'
import plators from '../assets/platos.json'
export const Contenedor3 = (props) => { 
    return (
        <div className = 'contenedor3-conteiner'>
            {
                plators.map((platos)=>{
                    return <Platos platos={platos}/>
                })
            }
        </div>
    )
}

export default Contenedor3