import { Icon } from '@iconify/react'
import React from 'react'

export const Button = ({icon, name}) => {
  return (
    <button className='button'>
      <Icon className="icono" icon= {icon}/>
      <span>{name}</span>
    </button>
  )
}

