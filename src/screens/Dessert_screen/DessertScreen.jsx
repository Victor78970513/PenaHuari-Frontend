import React, { useEffect, useState } from 'react';
import { getShow } from '../../services/services';
import DishCard from '../../components/molecules/DishCard'
import ListMenu from '../../components/molecules/ListMenu'

const DessertScreen = () => {
  const [shows, setShow] = useState([]);
  useEffect(() => {
    getShow("Platos").then((data)=> setShow(data))
  }, []);
  return (
    <div>
   

    
   <ListMenu titulo ="Dessert"/>
      {shows.map((show, index) => {  
        if (show.id_seccion === 5){
        return <DishCard title={show.nombre} url={show.imagen} descrip={show.descripcion} price={show.precio} key={index}/>;
        }
        return null;
      })}


    </div>
  )
}

export default DessertScreen
