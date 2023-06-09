import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home_screen/HomeScreen";
import DishScreen from "./screens/dish_screen/DishScreen";
import TableScreen from "./screens/table_screen/TableScreen";
import ProfileScreen from "./screens/profile_screen/ProfileScreen";
import Breakfast_screen from "./screens/Breakfast_screen/BreakfastScreen";
import LunchScreen from "./screens/Lunch_screen/LunchScreen";
import DinnerScreen from "./screens/Dinner_screen/DinnerScreen";
import DessertScreen from "./screens/Dessert_screen/DessertScreen";
import DrinksScreen from "./screens/Drinks_screen/DrinksScreen";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/dish" element={<DishScreen />} />
      <Route path="/table" element={<TableScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/seccion/breakfast" element={<Breakfast_screen />} />
      <Route path="/seccion/lunch" element={<LunchScreen />} />
      <Route path="/seccion/dinner" element={<DinnerScreen />} />
      <Route path="/seccion/dessert" element={<DessertScreen />} />
      <Route path="/seccion/drinks" element={<DrinksScreen />} />
    </Routes>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
