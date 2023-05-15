import React from 'react'
import { useState } from "react";
import './NavigationFrame.css'
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {GiForkKnifeSpoon} from 'react-icons/gi';
import { MdOutlineTableBar } from "react-icons/md";

//con el useState pudimos mantener los colores
export const NavigationFrame = () => {

  const [activeOption, SetActiveOption] = useState(null);

  const handleOptionClick = (option) =>{
    SetActiveOption(option)
  }
  
  //los a estaran en espera de un link
  return (
    <footer className='footer'>
        <div className='ul-container'>
            <ul className='nav-links'>
              <li className={`nav-item ${activeOption === 'home' ? 'active' : ''}`}>
                <a
                  href="#"
                  className={`nav-link ${activeOption === 'home' ? 'active-link' : ''}`}
                  onClick={() => handleOptionClick('home')}
                ><AiOutlineHome/> Home
                </a>
              </li>

              <li className={`nav-item ${activeOption === 'dish' ? 'active' : ''}`}>
                <a
                  href="#"
                  className={`nav-link ${activeOption === 'dish' ? 'active-link' : ''}`}
                  onClick={() => handleOptionClick('dish')}
                ><GiForkKnifeSpoon/> Dish
                </a>
              </li>
              <li className={`nav-item ${activeOption === 'table' ? 'active' : ''}`}>
                <a
                  href="#"
                  className={`nav-link ${activeOption === 'table' ? 'active-link' : ''}`}
                  onClick={() => handleOptionClick('table')}
                ><MdOutlineTableBar/> Table
                </a>
              </li>
              <li className={`nav-item ${activeOption === 'profile' ? 'active' : ''}`}>
                <a
                  href="#"
                  className={`nav-link ${activeOption === 'profile' ? 'active-link' : ''}`}
                  onClick={() => handleOptionClick('profile')}
                ><AiOutlineHome/> Profile
                </a>
              </li>
            </ul>
        </div>
    </footer>
  )
}

