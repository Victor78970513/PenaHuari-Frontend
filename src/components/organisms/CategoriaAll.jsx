import React from 'react'
import "./CategoriaAll.css"
import Boton from '../atoms/BotonesHomeScreen'
import AllMoleculasP from '../molecules/AllMoleculasP'
const CategoriaAll = () => {
  return (
    <div className='Categoria-All'>
        <div className='categoria-title-area'>
            <Boton type ={"boton-all"} name_button={"All"}/>
        </div>
        <AllMoleculasP/>

    </div>
  )
}

export default CategoriaAll