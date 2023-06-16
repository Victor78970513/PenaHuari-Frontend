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
import Account from "./screens/account/Account";
import Password from "./screens/password/Password";
import Reserve from "./screens/reserve/Reserve";
import PresupuestoPlato from "./screens/presupuesto/PresupuestoPlato";
import PlatoPorNombre from "./screens/platopornombre/PlatoPorNombre";
import Payment from "./screens/payment/Payment";

function App() {
  const location = useLocation();
  const hideNavBarRoutes = [
    "/shows",
    "/location",
    "/detailsDish",
    "/login",
    "/register",
    "/reserve",
    "/orders",
    "/sectionDish",
    "/account",
    "/password",
    "/presupuestoPlato",
    "/platoPorNombre",
    "/paymentMethod"
  ];
  const [selectedItems, setSelectedItems] = useState([]);
  const addItem = (item) => {
    setSelectedItems([...selectedItems, item]);
  };
  const [selectedMesa,setSelectedMesa] = useState([]);
  const addMesa = (mesa)=>{
    setSelectedMesa([...selectedMesa,mesa]);
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/dish" element={<DishScreen />} />
        <Route path="/table" element={<TableScreen addMesa={addMesa}/>} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/shows" element={<ShowScreen />} />
        <Route path="/location" element={<RestaurantLocation />} />
        <Route path="/detailsDish" element={<DetailsDish addItem={addItem} />}/>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/reserve" element={<Reserve mesas={selectedMesa}/>}/>
        <Route path="/orders" element={<Orders items={selectedItems} />} />
        <Route path="/sectionDish" element={<SectionDish />} />
        <Route path="/account" element={<Account/>}/>
        <Route path="/password" element={<Password/>}/>
        <Route path="/presupuestoPlato" element={<PresupuestoPlato/>}/>
        <Route path="/platoPorNombre" element={<PlatoPorNombre/>}/>
        <Route path="/paymentMethod" element={<Payment/>}/>
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
