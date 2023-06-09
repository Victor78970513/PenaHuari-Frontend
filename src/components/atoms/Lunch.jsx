import React from 'react'
import "./Lunch.css"
export  const Lunch = (props) => {
    const lunch = props.lunch
    const handleClick = () =>{
        console.log("Lunchs")
    }
  return (
    <button onClick={handleClick} className='lunchs-conteiner'>
        <span className='lunch-title'>{lunch.name}</span>
        <span className='lunch-image'>
            <img src = {lunch.imgsrc} alt=''/>
        </span>

    </button>
  )
}

export default Lunch