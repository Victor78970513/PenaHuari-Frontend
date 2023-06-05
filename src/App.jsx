import { NavBar } from "./components/molecules/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/screens/home_screen/HomeScreen";
import DishScreen from "./components/screens/dish_screen/DishScreen";
import TableScreen from "./components/screens/table_screen/TableScreen";
import ProfileScreen from "./components/screens/profile_screen/ProfileScreen";
import "./App.css";
import RestaurantLocation from "./components/screens/restaurant_location/RestaurantLocation";

function App() {
  return (

    <div>

      {/* <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/dish" element={<DishScreen />} />
          <Route path="/table" element={<TableScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
        
        <NavBar/>

      </BrowserRouter> */}
      <RestaurantLocation/>
    </div>

  );
}

export default App;
