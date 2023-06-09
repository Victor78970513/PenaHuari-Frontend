import React from 'react'
import "./CategoriaLauch.css"
import Boton from '../atoms/Boton'
import LauchP from '../molecules/LauchP'
import Lauch from '../../static/icons/logoLauch.svg'
const CategoriaLauch = () => {
  return (
    <div className='Categoria-Lauch'>
        <div className='categoria-launch-title'>
            <Boton type ={"boton-lauch"} name_button={"Lauch"}/>
            <Boton icono ={Lauch} name_button={"boton-logolaunch"}/>
        </div>
        <LauchP/>
    </div>
  )
}


export default CategoriaLauch