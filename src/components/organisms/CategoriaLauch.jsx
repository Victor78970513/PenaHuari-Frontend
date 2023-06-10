import React from 'react'
import "./CategoriaLauch.css"
import Boton from '../atoms/BotonesHomeScreen'
import LauchMoleculasP from '../molecules/LauchMoleculasP'
import Lauch from '../../static/icons/logoLauch.svg'
const CategoriaLauch = () => {
  return (
    <div className='Categoria-Lauch'>
        <div className='categoria-launch-title'>
            <Boton type ={"boton-lauch"} name_button={"Lauch"}/>
            <Boton icono ={Lauch} type={"boton-logolaunch"}/>
        </div>
        <LauchMoleculasP/>
    </div>
  )
}


export default CategoriaLauch