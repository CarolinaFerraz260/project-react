import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import MyBooks from "../pages/MyBooks";
import Favorites from "../pages/Favorites";
// import Search from "../pages/Search";
import Profile from "../pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="allBooks" element={<AllBooks />} />
          <Route path="myBooks" element={<MyBooks />} />
          <Route path="favorites" element={<Favorites />} />
          {/* <Route path="search" element={< />} /> */}
          <Route path="profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
