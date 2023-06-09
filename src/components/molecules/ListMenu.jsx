import React from 'react'
import ButtonSection from '../atoms/ButtonSection'
import { NavLink } from 'react-router-dom'
import './ListMenu.css'
import { Icon } from '@iconify/react';
const ListMenu = ({titulo}) => {
  return (
    <div className='cont'>
      <div className='title'>
      <Icon icon="ic:outline-arrow-back" />
      <div>
      <h3>{titulo}</h3>
      </div>
      </div>
      <div className='bar'>
      <NavLink to={"/"}>
      <ButtonSection menu="Breakfast"/>
      </NavLink>
      <NavLink to={"/Lunch"}>
      <ButtonSection menu="Lunch"/>
      </NavLink>
      <NavLink to={"/Dinner"}>
      <ButtonSection menu="Dinner"/>
      </NavLink>
      <NavLink to={"/Dessert"}>
      <ButtonSection menu="Dessert"/>
      </NavLink>
      <NavLink to={"/Drinks"}>
      <ButtonSection menu="Drinks"/>
      </NavLink>
      </div>
      

    </div>
  )
}

export default ListMenu
