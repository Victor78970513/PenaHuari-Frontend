import React from 'react'
import "./DinnerP.css"
import Dinner from '../atoms/Dinner'
import platosdnr from '../../assets/dinner.json'
const DinnerP = () => {
  return (
    <div className='platosdinner-conteiner'>
        {
            platosdnr.map((platosdnr)=>{
                return <Dinner platosdnr={platosdnr} key = {platosdnr.id}/>
            })
        }
    </div>
  )
}
export default DinnerP