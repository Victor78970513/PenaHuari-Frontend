import React from 'react'
import "./CategoriaDesserts.css"
import Boton from '../atoms/BotonesHomeScreen'
import Desserts from '../../static/icons/logoLauch.svg'
import DessertsMoleculasP from '../molecules/DessertsMoleculasP'
const CategoriaDesserts = () => {
  return (
    <div className='Categoria-Postre'>
    <div className='categoria-postre-title'>
        <Boton type={"boton-postre"} name_button={"Desserts"}/>
        <Boton icono={Desserts} type={"boton-logopostre"}/>
    </div>
    <DessertsMoleculasP/>

</div>
  )
}

export default CategoriaDesserts