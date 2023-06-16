import React from 'react'
import './Info.css'
import { Icon } from '@iconify/react';
function Info({titulo,description,url}) {
  return (
    <div className='info'>
        <Icon icon="ic:outline-arrow-back" />
        <div className='info1'> 
        <img src={url}/>
        </div>
      <div className='info-container'>
      <h3>{titulo}</h3>
      <p>{description}</p>
      </div>
    </div>
  )
}

export default Info
