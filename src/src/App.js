import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Home from "./pages/home";       
import ThisYear from "./pages/thisyear";  
import AllTime from "./pages/alltime";   
import Rock from "./pages/rock";       
import Rap from "./pages/rap";         
import Nav from "./components/Navbar"; 

export default function App() {
  return (
    <BrowserRouter> 
      <Nav /> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/thisyear" element={<ThisYear />} />
        <Route exact path="/alltime" element={<AllTime />} />
        <Route exact path="/rock" element={<Rock />} />
        <Route exact path="/rap" element={<Rap />} />
      </Routes>
    </BrowserRouter>
  );
}