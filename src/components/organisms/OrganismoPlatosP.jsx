import React from 'react'
import "./OrganismoPlatosP.css"
import CategoriaAll from './CategoriaAll'
import CategoriaBreakfast from './CategoriaBreakfast'
import CategoriaLauch from './CategoriaLauch'
import CategoriaDinner from './CategoriaDinner'
import CategoriaDesserts from './CategoriaDesserts'
import CategoriaDrinks from './CategoriaDrinks'

export const OrganismoPlatosP = () => {
  return (
    <div className='organismopi-conteiner'>
      <CategoriaAll/>
      <CategoriaBreakfast/>
      <CategoriaLauch/>
      <CategoriaDinner/>
      <CategoriaDesserts/>
      <CategoriaDrinks/>
    </div>
  )
}

export default OrganismoPlatosP
