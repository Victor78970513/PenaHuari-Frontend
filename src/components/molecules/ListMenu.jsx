import React from 'react'
import ButtonSection from '../atoms/ButtonSection'
import { NavLink } from 'react-router-dom'
import './ListMenu.css'
import { Icon } from '@iconify/react';
const ListMenu = ({titulo}) => {
  return (
    <div className='cont'>
      <div className='title'>
      <NavLink to={"/"}><Icon icon="ic:outline-arrow-back"/></NavLink>
      <div>
      <h3>{titulo}</h3>
      </div>
      </div>
      <div className='bar'>
      <NavLink to={"/seccion/breakfast"}>
      <ButtonSection menu="Breakfast"/>
      </NavLink>
      <NavLink to={"/seccion/lunch"}>
      <ButtonSection menu="Lunch"/>
      </NavLink>
      <NavLink to={"/seccion/dinner"}>
      <ButtonSection menu="Dinner"/>
      </NavLink>
      <NavLink to={"/seccion/dessert"}>
      <ButtonSection menu="Dessert"/>
      </NavLink>
      <NavLink to={"/seccion/drinks"}>
      <ButtonSection menu="Drinks"/>
      </NavLink>
      </div>
      

    </div>
  )
}

export default ListMenu
