import "./App.css";
import Home from "./pages/Home";
import City from "./pages/City";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Location from "./pages/Location";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/city/:cityId" element={<City/>}/>
        <Route path="/location" element={<Location/>}/>
      </Routes>
  );
}

export default App;
