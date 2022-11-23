import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="ELEANSHOP">
      <Navbar />
      <Routes>{/* <Route path="/" element={}/> */}</Routes>
    </div>
  );
}

export default App;
