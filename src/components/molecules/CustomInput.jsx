import React from 'react'
import "./CustomInput.css"
const CustomInput = ({title,placeholder,onChange,value,name}) => {
  return (
    <div className='custom-input-container'>
        <span>{title}</span>
        <input type='text' placeholder={placeholder} onChange={onChange} value={value} name={name}/>
        <div className="line"/>
    </div>
  )
}

export default CustomInput