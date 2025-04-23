import { Route } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Navigate, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import '../Styles/Layout.css'

function LayoutHome() {
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [user, setUser] = useState(null);

useEffect(() => {
  // Check if user is logged in
  const loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {
    setUser(JSON.parse(loggedInUser));
    setIsAuthenticated(true);
  }
}, []);

const login = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
  setUser(userData);
  setIsAuthenticated(true);
};

const logout = () => {
  localStorage.removeItem("user");
  setUser(null);
  setIsAuthenticated(false);
};

  return (
      <div className="app">
        <Navbar  />
        <div className="content">
        <Home/>
        </div>
        <Footer />
      </div>
  );
}

export default LayoutHome