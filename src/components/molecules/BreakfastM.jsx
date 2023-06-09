import React from 'react'
import "./BreakfastM.css"
import Desayuno from '../atoms/desayuno'
import platodf from '../../assets/breakfast.json'

const BreakfastM = () => {
  return (
    <div className='platosbreakfast-conteiner'>
        {
            platodf.map((platodf)=>{
                return <Desayuno pbreakfats={platodf} key ={platodf.id}/>
            })
        }
    </div>
  )
}

export default BreakfastM