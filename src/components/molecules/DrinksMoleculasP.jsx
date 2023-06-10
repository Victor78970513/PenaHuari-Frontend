import React, { useEffect, useState } from 'react';
import { getShow } from '../../services/services';
import "./DrinksMoleculasP.css";
import DrinksAtomosP from '../atoms/DrinksAtomosP';
const DrinksMoleculasP = () => {
    const [shows, setShow] = useState([]); useEffect(() => {
        getShow("Platos").then((data)=> setShow(data))
        }, []);
    return (
        <div className='platosbebida-conteiner'>
            {
                shows.map((bebida, index)=>{
                if (bebida.id_seccion === 4){
                    return <DrinksAtomosP bebida={bebida} key = {index}/>
                }
                return null
                })
            }
        </div>
  )
}

export default DrinksMoleculasP
