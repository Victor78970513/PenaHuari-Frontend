import React, { useEffect, useState } from 'react';
import { getShow } from '../../services/services';
import "./DessertsMoleculasP.css"
import DessertsAtomosP from "../atoms/DessertsAtomosP"

const DessertsMoleculasP = () => {
    const [shows, setShow] = useState([]); useEffect(() => {
        getShow("Platos").then((data)=> setShow(data))
        }, []);
    return (
        <div className='platospostre-conteiner'>
            {
                shows.map((postre, index)=>{
                if (postre.id_seccion === 5){
                    return <DessertsAtomosP postre={postre} key ={index}/>
                }
                return null
                })
            }
        </div>
  )
}

export default DessertsMoleculasP