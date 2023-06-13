import React from 'react'
import "./CategoriaDesserts.css"
import Boton from '../atoms/BotonesHomeScreen'
import Desserts from '../../static/icons/logoLauch.svg'
import DessertsMoleculasP from '../molecules/DessertsMoleculasP'
import { NavLink } from 'react-router-dom'

const CategoriaDesserts = () => {
  return (
  <div className='Categoria-Postre'>
    <NavLink to = "/seccion/dessert">
      <div className='categoria-postre-title'>
          <Boton type={"boton-postre"} name_button={"Desserts"}/>
          <Boton icono={Desserts} type={"boton-logopostre"}/>
      </div>
    </NavLink>
    <DessertsMoleculasP/>
  </div>
  )
}

export default CategoriaDesserts