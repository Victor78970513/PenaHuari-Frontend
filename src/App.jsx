// import { NavBar } from "./components/molecules/NavBar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomeScreen from "./screens/home_screen/HomeScreen";
import DishScreen from "./screens/dish_screen/DishScreen";
import TableScreen from "./screens/table_screen/TableScreen";
import ProfileScreen from "./screens/profile_screen/ProfileScreen";
import RestaurantLocation from "./screens/restaurant_location/RestaurantLocation";
import Navbar from "./components/molecules/NavBar";
import ShowScreen from "./screens/show_screen/ShowScreen";
import Breakfast_screen from "./screens/Breakfast_screen/BreakfastScreen";
import LunchScreen from "./screens/Lunch_screen/LunchScreen";
import DinnerScreen from "./screens/Dinner_screen/DinnerScreen";
import DessertScreen from "./screens/Dessert_screen/DessertScreen";
import DrinksScreen from "./screens/Drinks_screen/DrinksScreen";
import "./App.css";
import InformationScreen from "./screens/Information_screen/InformationScreen";

function App() {
  const location = useLocation();
  const Rutas = ["/location", "/show", "/seccion/breakfast", "/seccion/lunch","/seccion/dinner", "/seccion/drinks"];
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/dish" element={<DishScreen />} />
        <Route path="/table" element={<TableScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/location" element={<RestaurantLocation />} />
        <Route path="/show" element={<ShowScreen />} />
        <Route path="/Information" element={<InformationScreen/>} />
        
      </Routes>
      {!Rutas.includes(location.pathname) && <Navbar />}
    </div>
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
