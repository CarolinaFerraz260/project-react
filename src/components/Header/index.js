import React from "react";
// import {} from "./styles";
import "./styles.css";
import profile from "../../assets/profile.svg";
import search from "../../assets/search.svg";

function Header() {
	return (
		<header>
			<nav>
				<h1>header</h1>
	

				<div className="icons">
					<img src={search} alt="Search icon" />
					<img src={profile} alt="Profile icon" />
				</div>
			</nav>
		</header>
	);
}

export default Header;
