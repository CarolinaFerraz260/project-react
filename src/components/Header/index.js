import React from "react";
import {
  ContainerLinks,
  Logo,
  ProfileIcon,
  SearchIcon,
  Row,
  ContainerMenu,
  Links,
} from "./styles";
// import { Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.svg";
import search from "../../assets/search.svg";
import potato from "../../assets/beautifulpotato.png";

function Header() {
  return (
    <>
      <header>
        <ContainerLinks>
          <Links title="Home Page" to="/">
            <Logo src={potato} alt="logo" />
          </Links>
          <ContainerMenu>
            <a title="Search" href="/search">
              <SearchIcon src={search} alt="Search icon" />
            </a>
            <a title="Your Profile" href="/">
              <ProfileIcon src={profile} alt="Profile icon" />
            </a>
            <Links>Logout</Links>
          </ContainerMenu>
        </ContainerLinks>
      </header>
      <Row />
    </>
  );
}

export default Header;
