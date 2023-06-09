import React from 'react'
import "./CategoriaDinner.css"
import Boton from '../atoms/Boton'
import Dinner from '../../static/icons/logoLauch.svg'
import DinnerP from '../molecules/DinnerP'
const CategoriaDinner = () => {
  return (
    <div className='Categoria-Dinner'>
        <div className='categoria-dinner-title'>
            <Boton type={"boton-dinner"} name_button={"Dinner"}/>
            <Boton icono={Dinner} name_button={"boton-logodinner"}/>
        </div>
        <DinnerP/>

    </div>
  )
}


export default CategoriaDinner