import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Fixed from "./components/Fixed/Fixed";
import Catalog from "./pages/Catelog/Catalog";
import Reviews from "./pages/Reviews/Reviews";
import More from "./pages/More/More";
import ShowroomPage from "./pages/Showroom/Showroom";
import Favorites from "./pages/Favorites/Favorites";
import About from "./pages/About/About";
import Fitting from "./pages/Fitting/Fitting";

function App() {
  return (
    <div className="ELEANSHOP">
      <Navbar />
      <Fixed />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/more" element={<More />} />
        <Route path="/showroom" element={<ShowroomPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/fitting" element={<Fitting />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
