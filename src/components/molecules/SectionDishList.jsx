import React, { useEffect, useState } from 'react'
import { getPlatos } from '../../services/services';
import SectionDishPlato from '../atoms/SectionDishPlato';

const SectionDishList = ({endPoint}) => {
    const [platos,setPlatos] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const data= await getPlatos({endPoint:endPoint});
            setPlatos(data)
        };
        fetchData();
    },[])
  return (
    <div>
        {platos.map((plato)=>(
            <SectionDishPlato plato={plato} key={plato.id_comida}/>
        ))}
    </div>
  )
}

export default SectionDishList