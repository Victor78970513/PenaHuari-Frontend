import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home_screen/HomeScreen";
import DishScreen from "./screens/dish_screen/DishScreen";
import TableScreen from "./screens/table_screen/TableScreen";
import ProfileScreen from "./screens/profile_screen/ProfileScreen";
import Navbar from "./components/organisms/NavBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/dish" element={<DishScreen />} />
        <Route path="/table" element={<TableScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
      <Navbar />
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
