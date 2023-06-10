import React, { useEffect, useState } from 'react';
import { getShow } from '../../services/services';
import "./BreakfastMoleculasP.css"
import BreakfastAtomosP from '../atoms/BreakfastAtomosP'


const BreakfastMoleculasP = () => {
  const [shows, setShow] = useState([]); useEffect(() => {
    getShow("Platos").then((data)=> setShow(data))
    }, []);
  return (
    <div className='platosbreakfast-conteiner'>
        {
            shows.map((desayuno, index)=>{
              if (desayuno.id_seccion === 1){
                return <BreakfastAtomosP desayuno={desayuno} key ={index}/>
              }
              return null
            })
        }
    </div>
  )
}

export default BreakfastMoleculasP