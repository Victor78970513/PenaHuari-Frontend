import { Icon } from '@iconify/react'
import React from 'react'

const Button = ({icon,css,iconcss,text,onClick}) => {
  return (
    <div className={css} onClick={onClick}>
        <Icon icon={icon} className={iconcss}/>
        <span>{text}</span>
    </div>
  )
}

export default Button