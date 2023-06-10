import React, { useEffect, useState } from 'react';
import { getShow } from '../../services/services';
import "./AllMoleculasP.css"
import Platos from '../atoms/AllAtomosP'
export const Moleculaplatos = () => { 
    const [shows, setShow] = useState([]); useEffect(() => {
    getShow("Platos").then((data)=> setShow(data))
    }, []);
    return (
        <div className = 'moleculaplatos-conteiner'>
            {
                shows.map((place,index)=>{
                    
                    return <Platos place={place} key={index} />
  
                })
            }
        </div>
    )
}

export default Moleculaplatos