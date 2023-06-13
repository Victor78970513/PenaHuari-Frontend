import React from 'react'
import IconButton from './IconButton'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./Search.css"

const Search = () => {

  const onPressed = (text) =>{
    console.log(`ESTOY FUNCIONANDO BOTON DE ${text}`)
  }

  return (
    <div className="search">
        <IconButton css={"search-icon"} icon={faMagnifyingGlass} onClick={()=>onPressed('Busqueda de platos')}/>
        <input type="text" placeholder='Search...'/>
    </div>
  )
}

export default Search