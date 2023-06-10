import React from 'react'
import "./DishCard.css"


const DishCard = ({title,descrip,price,url}) => {
  return (
    <div className='container'>
      
      <h3>{title}</h3>
      <div>
      <img src={url}/>
      <p>{descrip}</p>
      </div>
      <span>{price}</span>
      
        
    </div>
  )
}

export default DishCard
