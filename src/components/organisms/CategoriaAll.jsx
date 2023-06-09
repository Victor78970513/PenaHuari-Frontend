import React from 'react'
import "./CategoriaAll.css"
import Boton from '../atoms/Boton'
import Logoall from "../../static/icons/tenedoreslogo.svg"
import Moleculaplatos from '../molecules/Moleculaplatos'
const CategoriaAll = () => {
  return (
    <div className='Categoria-All'>
        <div className='categoria-title-area'>
            <Boton type ={"boton-all"} name_button={"All"}/>
        </div>
        <Moleculaplatos/>

    </div>
  )
}

export default CategoriaAll