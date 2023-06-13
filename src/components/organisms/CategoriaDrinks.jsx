import React from 'react'
import "./CategoriaDrinks.css";
import Boton from '../atoms/BotonesHomeScreen';
import Bebida from '../../static/icons/logoLauch.svg';
import DrinksMoleculasP from '../molecules/DrinksMoleculasP';
import { NavLink } from 'react-router-dom'

const CategoriaDrinks = () => {
  return (
    <div className='Categoria-Bebida'>
      <NavLink to = "/seccion/drinks">
          <div className='categoria-bebida-title'>
              <Boton type={"boton-bebida"} name_button={"Drinks"}/>
              <Boton icono={Bebida} type={"boton-logobebida"}/>
          </div>
      </NavLink>
      <DrinksMoleculasP/>
    </div>
  )
}

export default CategoriaDrinks