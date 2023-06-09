import React from 'react'
import "./CategoriaDrinks.css"
import Boton from '../atoms/Boton'
import DrinksP from '../molecules/DrinksP'
import Drinks from "../../static/icons/logoLauch.svg"
const CategoriaDrinks = () => {
  return import(
    <div className='Categoria-Drinks'>
        <div className='categoria-drinks-title'>
            <Boton type = {"boton-drinks"} name_button={"Drinks"}/>
            <Boton icono={Drinks} name_class={"boton-logodrinks"}/>
        </div>
        <DrinksP/>
    </div>
  )
}

export default CategoriaDrinks