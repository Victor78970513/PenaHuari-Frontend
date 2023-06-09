import React from 'react'
import "./Moleculaplatos.css"
import Platos from '../atoms/Platos'
import plators from '../../assets/platos.json'
export const Moleculaplatos = () => { 
    return (
        <div className = 'moleculaplatos-conteiner'>
            {
                plators.map((platos)=>{
                    return <Platos platos={platos} key = {platos.id}/>
                })
            }
        </div>
    )
}

export default Moleculaplatos