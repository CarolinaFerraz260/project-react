import React from "react";
//import {  } from "./styles";

const Footer = () => {
	const year = new Date().getYear;
	return (
		<div>
			<p>Footer</p>
			<p>Project Name</p>
			<p>© {year} The cool team. All Rights Reserved.</p>
		</div>
	);
};

export default Footer;
