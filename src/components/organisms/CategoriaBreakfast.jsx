import React from 'react'
import "./CategoriaBreakfast.css"
import Boton from '../atoms/Boton'
import BreakfastM from '../molecules/BreakfastM'
import Breakfast from "../../static/icons/logoBreakfast.svg"
const CategoriaBreakfast = () => {
  return (
    <div className='Categoria-Breakfast'>
        <div className='categoria-breakfast-title'>
            <Boton type = {"boton-breakfast"} name_button={"Breakfast"} />
            <Boton icono={Breakfast} name_class={"boton-logobreakfast"}/>
        </div>
        <BreakfastM/>
    </div>
  )
}

export default CategoriaBreakfast