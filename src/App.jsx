// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomeScreen from "./components/screens/home_screen/HomeScreen";
// import DishScreen from "./components/screens/dish_screen/DishScreen";
// import TableScreen from "./components/screens/table_screen/TableScreen";
// import ProfileScreen from "./components/screens/profile_screen/ProfileScreen";
// import "./App.css";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<HomeScreen />} />
//       <Route path="/dish" element={<DishScreen />} />
//       <Route path="/table" element={<TableScreen />} />
//       <Route path="/profile" element={<ProfileScreen />} />
//     </Routes>
//   );
// }


// function Root(){
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>
// }

// export default Root;

//HABER Q SALE

import * as React from "react";
import mapboxgl from 'mapbox-gl';
// import Map, { Marker } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

// const MAPBOX_TOKEN = "pk.eyJ1IjoidG9uaTIwMDIiLCJhIjoiY2xpaGtieGV3MHZlNTNjbXNxdjJtcGYwciJ9.5Hqk_f2Y-wgLMh-qB-j4ew";

export default function App(){
  const initialView = {
    latitude: 6.255,
    longitude: -75.5658,
    zoom: 14
  };

  const medCenter = {
    latitude: 6.255,
    longitude: -75.5658,
    color: "red"
  };

  const rutaN = {
    latitude: 6.255,
    longitude: -75.5658,
    color: "orange"
  };

  return(
    <div>
      hola
    </div>
  )
}
