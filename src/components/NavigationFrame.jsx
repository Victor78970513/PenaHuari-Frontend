import React from 'react'
import { useState } from "react";
import './NavigationFrame.css'
import { Icon } from '@iconify/react';

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
                ><span class="material-symbols-outlined">
                home
                </span><span> Home</span>
                </a>
              </li>

              <li className={`nav-item ${activeOption === 'dish' ? 'active' : ''}`}>
                <a
                  href="#"
                  className={`nav-link ${activeOption === 'dish' ? 'active-link' : ''}`}
                  onClick={() => handleOptionClick('dish')}
                ><Icon className='icono' icon="fluent-emoji-high-contrast:fork-and-knife-with-plate" /><span> Dish</span>
                </a>
              </li>
              <li className={`nav-item ${activeOption === 'table' ? 'active' : ''}`}>
                <a
                  href="#"
                  className={`nav-link ${activeOption === 'table' ? 'active-link' : ''}`}
                  onClick={() => handleOptionClick('table')}
                ><span class="material-symbols-outlined">
                table_bar
                </span><span> Table</span>
                </a>
              </li>
              <li className={`nav-item ${activeOption === 'profile' ? 'active' : ''}`}>
                <a
                  href="#"
                  className={`nav-link ${activeOption === 'profile' ? 'active-link' : ''}`}
                  onClick={() => handleOptionClick('profile')}
                ><span class="material-symbols-outlined">
                person
                </span><span> Profile</span>
                </a>
              </li>
            </ul>
        </div>
    </footer>
  )
}

