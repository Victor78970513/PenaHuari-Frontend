import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home_screen/HomeScreen";
import DishScreen from "./screens/dish_screen/DishScreen";
import TableScreen from "./screens/table_screen/TableScreen";
import ProfileScreen from "./screens/profile_screen/ProfileScreen";
import Breakfast_screen from "./screens/Breakfast_screen/BreakfastScreen";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/dish" element={<DishScreen />} />
      <Route path="/table" element={<TableScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="/Breakfast" element={<Breakfast_screen />} />
    </Routes>
  );
}


function Root(){
  <BrowserRouter>
    <App/>
  </BrowserRouter>
}

export default Root;
