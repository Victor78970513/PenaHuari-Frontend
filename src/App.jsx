import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomeScreen from "./screens/home_screen/HomeScreen";
import DishScreen from "./screens/dish_screen/DishScreen";
import TableScreen from "./screens/table_screen/TableScreen";
import ProfileScreen from "./screens/profile_screen/ProfileScreen";
import RestaurantLocation from "./screens/restaurant_location/RestaurantLocation";
import Navbar from "./components/molecules/NavBar";
import ShowScreen from "./screens/show_screen/ShowScreen";
import "./App.css";
import { useState } from "react";
import DetailsDish from "./screens/details_dish/DetailsDish";
import Orders from "./screens/orders/Orders";
import LoginScreen from "./screens/login_screen/LoginScreen";
import RegisterScreen from "./screens/register_screen/RegisterScreen";
import SectionDish from "./screens/section_dish/SectionDish";

function App() {
  const location = useLocation();
  const hideNavBarRoutes = ['/shows','/location','/detailsDish','/login','/register','/reserve','/orders','/sectionDish'];
  const [selectedItems, setSelectedItems] = useState([]);
  const addItem = (item) => {
    setSelectedItems([...selectedItems, item])
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/dish" element={<DishScreen/>} />
        <Route path="/table" element={<TableScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/shows" element={<ShowScreen />} />
        <Route path="/location" element={<RestaurantLocation />} />
        <Route path="/detailsDish" element={<DetailsDish addItem={addItem}/>}/>
        <Route path="/orders" element={<Orders items={selectedItems}/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route path="/sectionDish" element={<SectionDish/>}/>
      </Routes>
      {!hideNavBarRoutes.includes(location.pathname) && <Navbar />}
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
