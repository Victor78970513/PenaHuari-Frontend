import React, { useEffect, useState } from 'react';
import DishCard from '../../components/molecules/DishCard'
import ListMenu from '../../components/molecules/ListMenu'
import { getShow } from '../../services/services';

const BreakfastScreen = () => {
  const [shows, setShow] = useState([]);
  useEffect(() => {
    getShow("Platos").then((data)=> setShow(data))
  }, []);
  return (
    <div className='Break-container'>

      <ListMenu titulo ="Breakfast"/>
      
      {shows.map((show, index) => {
        if (show.id_seccion === 1){
        return <DishCard title={show.nombre} url={show.imagen} descrip={show.descripcion} price={show.precio} key={index}/>;
        }
        return null;
      })}
      
      
      
    </div>
  )
}

export default BreakfastScreen
