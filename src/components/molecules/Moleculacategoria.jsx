import React from 'react'
import "./Moleculacategoria.css"
import All from '../atoms/All'
import logors from '../../assets/logos.json'
export const Moleculacategoria = (props) => {
  return (
    <div className='moleculacategoria-conteiner'>
        <All/>
        <img src='../static/icons/tenedoreslogo.svg' alt=''/>
    </div>
  )
}

export default Moleculacategoria