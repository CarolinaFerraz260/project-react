import React from "react";
//import {  } from "./styles";
import "./footer.css";


const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p>Potato Books</p>
      <p>© { year } The cool team. All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;
