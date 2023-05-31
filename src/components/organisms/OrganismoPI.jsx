import React from 'react'
import "./OrganismoPI.css"
import Moleculacategoria from '../molecules/Moleculacategoria'
import Moleculaplatos from '../molecules/Moleculaplatos'

export const OrganismoPI = (props) => {
  const organismopi = props.organismopi
  return (
    <div className='organismopi-conteiner'>
      <Moleculacategoria/>
      <Moleculaplatos/>
    </div>
  )
}

export default OrganismoPI
