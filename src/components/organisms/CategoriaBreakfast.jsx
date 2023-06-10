import React from 'react'
import "./CategoriaBreakfast.css"
import Boton from '../atoms/BotonesHomeScreen'
import BreakfastMoleculasP from '../molecules/BreakfastMoleculasP'
import Breakfast from "../../static/icons/logoBreakfast.svg"
const CategoriaBreakfast = () => {
  return (
    <div className='Categoria-Breakfast'>
        <div className='categoria-breakfast-title'>
            <Boton type = {"boton-breakfast"} name_button={"Breakfast"} />
            <Boton icono={Breakfast} type={"boton-logobreakfast"}/>
        </div>
        <BreakfastMoleculasP/>
    </div>
  )
}

export default CategoriaBreakfast