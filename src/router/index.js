import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
/* import Menu from "../components/Menu"; */

const Router = ({ handleSubmit }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login handleSubmit={handleSubmit} />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
