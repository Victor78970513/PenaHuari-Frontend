import React from 'react'
import "./SectionHeader.css"
import IconButton from "../atoms/IconButton";
const SectionHeader = ({text,onClick,icon}) => {
  return (
    <div className='section-header-container'>
        <button   className='section-header-button'  onClick={onClick}>{text}</button>
        <IconButton css={'section-icon'} icon={icon}/>
    </div>
  )
}

export default SectionHeader