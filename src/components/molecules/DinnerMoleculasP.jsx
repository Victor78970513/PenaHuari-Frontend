import React, { useEffect, useState } from 'react';
import { getShow } from '../../services/services';
import "./DinnerMoleculasP.css"
import DinnerAtomosP from '../atoms/DinnerAtomosP'

const DinnerMoleculasP = () => {
  const [shows, setShow] = useState([]); useEffect(() => {
    getShow("Platos").then((data)=> setShow(data))
    }, []);
  return (
    <div className='platosdinner-conteiner'>
        {
            shows.map((dinner, index)=>{
              if (dinner.id_seccion === 3){
                return <DinnerAtomosP dinner={dinner} key = {index}/>
              }
              return null
            })
        }
    </div>
  )
}
export default DinnerMoleculasP