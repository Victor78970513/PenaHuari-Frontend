import React from 'react'
import Button from '../atoms/Button'
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
      <Button menu="Breakfast"/>
      </NavLink>
      <NavLink to={"/Lunch"}>
      <Button menu="Lunch"/>
      </NavLink>
      <NavLink to={"/Dinner"}>
      <Button menu="Dinner"/>
      </NavLink>
      <NavLink to={"/Dessert"}>
      <Button menu="Dessert"/>
      </NavLink>
      <NavLink to={"/Drinks"}>
      <Button menu="Drinks"/>
      </NavLink>
      </div>
      

    </div>
  )
}

export default ListMenu
