import React from 'react'
import "./CategoriaBreakfast.css"
import Boton from '../atoms/BotonesHomeScreen'
import BreakfastMoleculasP from '../molecules/BreakfastMoleculasP'
import Breakfast from "../../static/icons/logoBreakfast.svg"
import { NavLink } from 'react-router-dom'

const CategoriaBreakfast = () => {
  return (
    <div className='Categoria-Breakfast'>
      <NavLink to = "/seccion/breakfast">
        <div className='categoria-breakfast-title'>
            <Boton type = {"boton-breakfast"} name_button={"Breakfast"} />
            <Boton icono={Breakfast} type={"boton-logobreakfast"}/>
        </div>
      </NavLink>
      <BreakfastMoleculasP/>
    </div>
  )
}

export default CategoriaBreakfast