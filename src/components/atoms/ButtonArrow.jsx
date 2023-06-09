import React from 'react'
import { Icon } from '@iconify/react'
import './ButtonArrow.css'

export const ButtonArrow = ({icono,name}) => {
    const handleClick = () => {
        console.log("si funca")
    }

  return (
    <div className="flecha" >
        <Icon className="icono" icon= {icono} onClick={handleClick}/>
        <span className='name'>{name}</span>
    </div>
  )
}


