// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import LayoutHome from "./components/LayoutHome";
import "./App.css";
import Home from "./components/Home";
import LostItems from "./components/LostItems";
import FoundItem from "./components/FoundItem";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
          <Route path="lost" element={<LostItems />} />
          <Route path="found" element={<FoundItem />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


