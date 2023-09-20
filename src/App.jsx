import React from "react";
import Globalstyles from './components/Globalstyles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Team from "./Team";
import Services from "./Services";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Booking from "./Booking";
import Error from "./Error";
import Gototop from "./assets/Gototop";

const App = () => {
  return (
    <>
      <Globalstyles/>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/booking" element={<Booking/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Gototop />
        
        <Footer />
    </>
  )
}

export default App
