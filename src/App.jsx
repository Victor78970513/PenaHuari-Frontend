import { NavBar } from "./components/molecules/NavBar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomeScreen from "./screens/home_screen/HomeScreen";
import DishScreen from "./screens/dish_screen/DishScreen";
import TableScreen from "./screens/table_screen/TableScreen";
import ProfileScreen from "./screens/profile_screen/ProfileScreen";
import RestaurantLocation from "./screens/restaurant_location/RestaurantLocation";
import "./App.css";

function App() {
  const location = useLocation();
  const Rutas = ['/location'];
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/dish" element={<DishScreen />}/>
        <Route path="/table" element={<TableScreen />}/>
        <Route path="/profile" element={<ProfileScreen/>}/>
        <Route path="/location" element={<RestaurantLocation/>} />
      </Routes>
      {!Rutas.includes(location.pathname)&&<NavBar />}
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
