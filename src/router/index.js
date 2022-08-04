import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import AboutBook from "../pages/AboutBook";
import ChangeBook from "../pages/ChangeBook";
import ChangeProfile from "../pages/ChangeProfile";
import BooksBySearch from "../pages/BooksBySearch";
import AddBook from "../pages/AddBook";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="profile" element={<Profile />} />
        <Route path="aboutbook" element={<AboutBook />} />
        <Route path="changebook" element={<ChangeBook />} />
        <Route path="changeprofile" element={<ChangeProfile />} />
        <Route path="booksbysearch" element={<BooksBySearch />} />
        <Route path="addbook" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
