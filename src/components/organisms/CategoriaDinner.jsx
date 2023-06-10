import React from 'react'
import "./CategoriaDinner.css"
import Boton from '../atoms/BotonesHomeScreen'
import Dinner from '../../static/icons/logoLauch.svg'
import DinnerMoleculasP from '../molecules/DinnerMoleculasP'
const CategoriaDinner = () => {
  return (
    <div className='Categoria-Dinner'>
        <div className='categoria-dinner-title'>
            <Boton type={"boton-dinner"} name_button={"Dinner"}/>
            <Boton icono={Dinner} type={"boton-logodinner"}/>
        </div>
        <DinnerMoleculasP/>

    </div>
  )
}


export default CategoriaDinner