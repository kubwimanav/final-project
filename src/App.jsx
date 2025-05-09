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
import AdminDashboardLayout from "./AdminDashboard/AdminDashboardLayout";
import AdminDashHome from "./AdminDashboard/AdminDashHome";
import UserManagement from "./AdminDashboard/UserManagement";
import SettingAdmin from "./AdminDashboard/SettingAdmin";
import ContactMessageDashboard from "./AdminDashboard/ContactMessage";
import LostitemDash from "./AdminDashboard/LostitemDash";
import FounItemsDash from "./AdminDashboard/FounItemsDash";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
          <Route path="lost" element={<LostItems />} />
          <Route path="found" element={<FoundItem />} />
        </Route>
        <Route path="/admin" element={<AdminDashboardLayout />}>
          <Route index element={<AdminDashHome />} />
          <Route path="adminhome" element={<AdminDashHome />} />
          <Route path="user" element={<UserManagement />} />
          <Route path="adminsetting" element={<SettingAdmin />} />
          <Route path="contact" element={<ContactMessageDashboard />} />
          <Route path="founditem" element={<FounItemsDash />} />
          <Route path="lostitem" element={<LostitemDash />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


