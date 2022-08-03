import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import MyBooks from "../pages/MyBooks";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search";
import Profile from "../pages/Profile";

const Router = () => {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allBooks" element={<AllBooks />} />
        <Route path="/myBooks" element={<MyBooks />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  );
};

export default Router;
