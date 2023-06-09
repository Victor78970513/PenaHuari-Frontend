import React from 'react'
import "./LauchP.css"
import Lunch from "../atoms/Lunch"
import platolh from "../../assets/lauch.json"
const LauchP = () => {
  return (
    <div className='platoslauch-conteiner'>
        {
            platolh.map((platolh)=>{
                return <Lunch platolh={platolh} key = {platolh.id}/>
            })
        }

    </div>
  )
}
export default LauchP