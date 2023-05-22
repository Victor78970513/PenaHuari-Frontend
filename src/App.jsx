import { NavBar } from "./components/molecules/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/screens/home_screen/HomeScreen";
import DishScreen from "./components/screens/dish_screen/DishScreen";
import TableScreen from "./components/screens/table_screen/TableScreen";
import ProfileScreen from "./components/screens/profile_screen/ProfileScreen";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/dish" element={<DishScreen />} />
      <Route path="/table" element={<TableScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
    </Routes>
  );
}


function Root(){
  <BrowserRouter>
    <App/>
  </BrowserRouter>
}

export default Root;
