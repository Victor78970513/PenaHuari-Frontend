import React, { useEffect, useState } from 'react';
import { getShow } from '../../services/services';
import "./LauchMoleculasP.css"
import LauchAtomosP from "../atoms/LauchAtomosP"
const LauchMoleculasP = () => {
  const [shows, setShow] = useState([]); useEffect(() => {
    getShow("Platos").then((data)=> setShow(data))
    }, []);
  return (
    <div className='platoslauch-conteiner'>
        {
            shows.map((lunch, index)=>{
              if (lunch.id_seccion === 2){
                return <LauchAtomosP lunch={lunch} key = {index}/>
              }
              return null
            })
        }

    </div>
  )
}
export default LauchMoleculasP