import React from 'react'
import "./DrinksP.css"
import Drinks from '../atoms/Drinks'
import platosdks from "../../assets/drinks.json"

const DrinksP = () => {
  return (
    <div className='platosdrinks-conteiner'>
        {
            platosdks.map((platosdks)=>{
                return <Drinks platosdks={platosdks} key={platosdks.id}/>
            })
        }
    </div>
  )
}

export default DrinksP