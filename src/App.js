import "./App.css";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SplashScreen from "./pages/SplashScreen";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={showSplash ? <SplashScreen /> : <Navigate to="/home" />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />  
        <Route path="/OurTeam" element={<OurTeam />} />  
        <Route path="/ContactUs" element={<ContactUs />} />  
      </Routes> 
    </Router>
  );
}

export default App;
