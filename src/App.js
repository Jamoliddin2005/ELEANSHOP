import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeaderSlider from "./components/HeaderSlider/HeaderSlider";

function App() {
  return (
    <div className="ELEANSHOP">
      <Navbar />
      <HeaderSlider/>
      <Routes>{/* <Route path="/" element={}/> */}</Routes>
    </div>
  );
}

export default App;
