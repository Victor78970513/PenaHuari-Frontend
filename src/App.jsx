import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowScreen from "./screens/show_screen/ShowScreen";
import TableScreen from "./screens/table_screen/TableScreen";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/show" element={ <ShowScreen/> } />
      <Route path="/table" element={<TableScreen />} />
    </Routes>
  );
}

function Root() {
  <BrowserRouter>
    <App />
  </BrowserRouter>;
}

export default Root;

