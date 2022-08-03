import React from "react";
// import {} from "./styles";
import "./header.css";
// import { Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.svg";
import search from "../../assets/search.svg";
import potato from "../../assets/beautifulpotato.png";

function Header() {
	// const navigate = useNavigate();

	return (
		<>
			<header className="header">
				<nav className="nav">
					{/* <Link to="/home">
						<img className="logo" src={potato} alt="Project logo" />
					</Link> */}

					{/* <a href="/home" onClick={ () => navigate("/home")}>
						<img className="logo" src={potato} alt="Project logo" />
					</a> */}



					<a title="Home Page" href="/">
						<img className="logo" src={potato} alt="Project logo" />
					</a>

					<div className="icons">
						<a title="Search" href="/">
							<img className="search-icon" src={search} alt="Search icon" />
						</a>
						<a title="Your Profile" href="/">
							<img src={profile} alt="Profile icon" />
						</a>
					</div>
				</nav>
			</header>
			<hr />
		</>
	);
}

export default Header;
