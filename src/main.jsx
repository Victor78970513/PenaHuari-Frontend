import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './App.jsx'
import BreakfastScreen from './screens/Breakfast_screen/BreakfastScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LunchScreen from './screens/Lunch_screen/LunchScreen'
import DinnerScreen from './screens/Dinner_screen/DinnerScreen'
import DessertScreen from './screens/Dessert_screen/DessertScreen'
import DrinksScreen from './screens/Drinks_screen/DrinksScreen'



ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App /> 
    // <Breakfast_screen/>
    //  <Root/> 
    
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<BreakfastScreen/>} />
        <Route path='/Lunch' element={<LunchScreen/>} />
        <Route path='/Dinner' element={<DinnerScreen/>} />
        <Route path='/Dessert' element={<DessertScreen/>} /> 
        <Route path='/Drinks' element={<DrinksScreen/>} /> 
        
      </Routes>
      

    </BrowserRouter>,
  
)
