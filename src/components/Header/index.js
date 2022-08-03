import React from "react";
import { ContainerLinks, Logo, SearchIcon, Row } from "./styles";

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
          {/* <Link to="/home">
						<img className="logo" src={potato} alt="Project logo" />
					</Link> */}

          {/* <a href="/home" onClick={ () => navigate("/home")}>
						<img className="logo" src={potato} alt="Project logo" />
					</a> */}

          <a title="Home Page" href="/">
            <Logo src={potato} alt="logo" />
          </a>

          <div>
            <a title="Search" href="/search">
              <SearchIcon src={search} alt="Search icon" />
            </a>
            <a title="Your Profile" href="/">
              <img src={profile} alt="Profile icon" />
            </a>
          </div>
        </ContainerLinks>
      </header>
      <Row />
    </>
  );
}

export default Header;
