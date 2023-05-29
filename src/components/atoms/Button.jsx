import { Icon } from '@iconify/react'
import React from 'react'
import './Button.css'

export const Button = ({icon, name, click, estilo, }) => {
  return (
    <div className={estilo} onClick={click}>
      <Icon className="icono" icon= {icon}/>
      <span>{name}</span>
    </div>
  )
}

