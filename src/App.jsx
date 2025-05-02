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
import LostItems from "./components/LostItems";
import FoundItems from "./components/FoundItems";
import Home from "./components/Home";
import LogIn from "./components/Login";
import LostItemForm from "./components/LostItemForm";
import SignupForm from "./components/SignupFom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
          <Route path="lost" element={<LostItems />} />
          <Route path="found" element={<FoundItems />} />
          <Route path="lostform" element={<LostItemForm />} />
        </Route>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// App.css

/* components/Home.css */

/* components/Login.js */

/* components/Register.js */

/* components/Auth.css */
