import React from 'react'
import { Icon } from '@iconify/react';
import "./IconButton.css"
const IconButton = ({icon,css,onClick}) => {
  return (
    <button className='fontawesome-icon'>
        <Icon className={css} icon={icon} onClick={onClick}/>
    </button>
  )
}

export default IconButton