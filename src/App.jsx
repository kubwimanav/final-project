// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import AdminDashboard from './DashBoard/DashBoard';
import LayoutHome from './components/LayoutHome';
import './App.css';


function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<LayoutHome/>} />
            <Route path="/admin" element={<AdminDashboard />} />
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



