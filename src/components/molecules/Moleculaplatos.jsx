import React from 'react'
import "./Moleculaplatos.css"
import Platos from '../atoms/Platos'
import plators from '../../assets/platos.json'
export const Moleculaplatos = (props) => { 
    return (
        <div className = 'moleculaplatos-conteiner'>
            {
                plators.map((platos)=>{
                    return <Platos platos={platos}/>
                })
            }
        </div>
    )
}

export default Moleculaplatos