import React, { useState } from "react";
import "./App.css";
import Home from "./components/home/home";
import Header from "./components/home/componentsHome/header";
import About from "./components/about/about";
import { Routes, Route } from "react-router-dom";
import Testimonials from "./components/testimonals/testimonals";

function App() {
  const [pageNavigate, setPageNavigate] = useState(true);
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header setPageNavigate={setPageNavigate} />
          {pageNavigate ? <Home setPageNavigate={setPageNavigate} /> : <About />}
        </>
      } />
      <Route path="/testimony" element={<Testimonials />} />
    </Routes>
  );
}

export default App;