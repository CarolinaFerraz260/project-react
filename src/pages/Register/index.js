import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/register.jpg";
import Footer from "../../components/Footer";
import potato from "../../assets/beautifulpotato.png";
import { Link } from "react-router-dom";
import Axios from "axios";
import {
	ContainerLogo,
	Logo,
	ContainerFormRegister,
	FormRegister,
	InputProfile,
	ContainerImage,
	ImageRegister,
	ContainerAllButtons,
	ContainerButton,
	ButtonLogin,
	ButtonRegister,
} from "./styles";

const Register = () => {
	const navigate = useNavigate();
	const name = useRef();
	const password = useRef();
	const email = useRef();
	const [message, setMessage] = useState("");
	let isOk = true;

	async function RegisterUser(credentials) {
		try {
			await Axios.post("/api/auth/register", JSON.stringify(credentials), {
				headers: {
					"Content-Type": "application/json",
				},
			});
			isOk = true;
			setMessage("Account Created");
		} catch (error) {
			isOk = false;
			setMessage(error.message);
		}
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		await RegisterUser({
			email: email.current.value,
			password: password.current.value,
			name: name.current.value,
		});
	};

	function loginButton() {
		navigate("../login");
	}

	return (
		<>
			<ContainerLogo>
				<Link to="/">
					<Logo src={potato} alt="logo" />
				</Link>
			</ContainerLogo>
			<ContainerFormRegister>
				<FormRegister onSubmit={(e) => handleSubmit(e, email, password)}>
					<ContainerImage>
						<ImageRegister src={Image} alt="User" />
					</ContainerImage>
					<InputProfile
						placeholder="Email"
						name="nameUser"
						type="email"
						ref={email}
					></InputProfile>
					<InputProfile
						placeholder="Username"
						name="name"
						type="text"
						ref={name}
					></InputProfile>
					<InputProfile
						placeholder="Password"
						name="passwUser"
						type="password"
						ref={password}
					></InputProfile>
					<ContainerAllButtons>
						<ContainerButton>
							<ButtonRegister type="submit">Register</ButtonRegister>
						</ContainerButton>
						<ContainerButton>
							{" "}
							<ButtonLogin type="button" onClick={loginButton}>
								Login
							</ButtonLogin>
						</ContainerButton>
					</ContainerAllButtons>
				</FormRegister>
			</ContainerFormRegister>
			<div>{message}</div>
			<Footer />
		</>
	);
};

export default Register;
