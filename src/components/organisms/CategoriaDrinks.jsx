import React from 'react'
import "./CategoriaDrinks.css";
import Boton from '../atoms/BotonesHomeScreen';
import Bebida from '../../static/icons/logoLauch.svg';
import DrinksMoleculasP from '../molecules/DrinksMoleculasP';
const CategoriaDrinks = () => {
  return (
    <div className='Categoria-Bebida'>
        <div className='categoria-bebida-title'>
            <Boton type={"boton-bebida"} name_button={"Drinks"}/>
            <Boton icono={Bebida} type={"boton-logobebida"}/>
        </div>
        <DrinksMoleculasP/>

    </div>
  )
}

export default CategoriaDrinks