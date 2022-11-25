import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Fixed from "./components/Fixed/Fixed";
import Catalog from "./pages/Catelog/Catalog";

function App() {
  return (
    <div className="ELEANSHOP">
      <Navbar />
      <Fixed />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
