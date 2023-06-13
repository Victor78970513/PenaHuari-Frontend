import React from 'react'
import IconButton from './IconButton.jsx'
import "./Presupuesto.css"
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
const Presupuesto = () => {
  return (
    <div className='presupuesto-container'>
        <div className="presupuesto">
            <input className='presupuesto-input' type="number" placeholder='Enter your Budget'/>
        </div>
        <IconButton css={"presupuesto-icon"} icon={faHandHoldingDollar}/>
    </div>
  )
}

export default Presupuesto