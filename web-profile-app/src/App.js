// import logo from './logo.svg';

// MODULES
import React from "react";
import { Routes, Route } from "react-router-dom";

// FILES
import Home from './Pages/Home/Home';

// CSS
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App;
