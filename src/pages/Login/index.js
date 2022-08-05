import React, { useState, useRef } from "react";
import Image from "../../assets/main.png";
import { useNavigate, Navigate } from "react-router-dom";
import Footer from "../../components/Footer";
import potato from "../../assets/beautifulpotato.png";
import { Link } from "react-router-dom";
import Axios from "axios";
import {
	ContainerLogo,
	Logo,
	ContainerFormLogin,
	FormLogin,
	InputProfile,
	ContainerImage,
	ContainerAllButtons,
	ContainerButton,
	ButtonLogin,
	ButtonRegister,
} from "./styles";

const Login = () => {
	const navigate = useNavigate();
	const email = useRef();
	const password = useRef();

	const [login, setLogin] = useState(false);
	const [errMessage, setErrMessage] = useState("");

	async function loginUser(credentials) {
		try {
			const data = await Axios.post(
				"/api/auth/login",
				JSON.stringify(credentials),
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			document.cookie = `token=${data.data.data.token}`;
			setLogin(true);
		} catch (err) {
			setErrMessage(err.message);
			document.cookie = `token=`;
			setLogin(false);
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();
		await loginUser({
			email: email.current.value,
			password: password.current.value,
		});
	}

	function registerButton() {
		navigate("../register");
	}

	return (
		<>
			<ContainerLogo>
				<Link to="/">
					<Logo src={potato} alt="logo" />
				</Link>
			</ContainerLogo>

			{login ? (
				<div>
					<Navigate to="../home" replace={true} />
				</div>
			) : (
				<>
					<div>{errMessage}</div>
					<ContainerFormLogin>
						<FormLogin onSubmit={handleSubmit}>
							<ContainerImage>
								<img src={Image} alt="User" />
							</ContainerImage>
							<InputProfile
								placeholder="Username"
								name="email"
								type="text"
								ref={email}
							></InputProfile>
							<InputProfile
								placeholder="Password"
								name="passwUser"
								type="password"
								ref={password}
							></InputProfile>
							<ContainerAllButtons>
								<ContainerButton>
									<ButtonLogin type="submit">Login</ButtonLogin>
								</ContainerButton>
								<ContainerButton>
									{" "}
									<ButtonRegister type="button" onClick={registerButton}>
										Register
									</ButtonRegister>
								</ContainerButton>
							</ContainerAllButtons>
						</FormLogin>
					</ContainerFormLogin>
					<Footer />
				</>
			)}
		</>
	);
};

export default Login;
