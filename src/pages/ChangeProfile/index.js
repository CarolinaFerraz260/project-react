import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Axios from "axios";
import {
	ContainerProfile,
	ContainerInfosUser,
	InputChangeImage,
	ContainerInputs,
	InputEditProfile,
	ContainerImageUser,
	ImageUser,
	ContainerButtonSave,
	ButtonSaveProfile,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

// TODO mudar codigo
const ChangeProfile = () => {
	const navigate = useNavigate();
	const info = useLocation();
	const user = info.state;
	const name = useRef();
	const email = useRef();
	const profilePicture = useRef();
	const password = useRef();

	const token = document.cookie
		.split("; ")
		.map((a) => a.split("="))
		.filter(([a, b]) => a === "token")
		.flat();

	useEffect(() => {
		if (user === null || token[1] === "") {
			navigate("../home");
		} else {
			name.current.value = user.name;
			email.current.value = user.email;
			profilePicture.current.value = user.profile_picture;
		}
	}, []);

	async function updateUser(e) {
		e.preventDefault();
		const updatedUser = {
			name: name.current.value,
			email: email.current.value,
			profile_picture: profilePicture.current.value,
		};
		if (password.current.value !== "")
			updatedUser.password = password.current.value;
		try {
			await Axios.put("/api/user/profile", JSON.stringify(updatedUser), {
				headers: {
					"Content-Type": "application/json",
					Authorization: token[1],
				},
			});
			navigate("../profile");
		} catch (err) {}
	}

	return (
		<>
			<Header />
			<ContainerProfile>
				<ContainerInfosUser onSubmit={updateUser}>
					<ContainerImageUser>
						<ImageUser src={user !== null ? user.profile_picture : null} />
					</ContainerImageUser>
					<ContainerInputs>
						<label>
							<InputChangeImage
								name="nameUser"
								type="text"
								id="chimg"
								placeholder="Img Link"
								ref={profilePicture}
								required
							></InputChangeImage>
						</label>
						<InputEditProfile
							placeholder="User name"
							name="nameUser"
							type="text"
							id="chname"
							ref={name}
							required
						/>
						<InputEditProfile
							placeholder="Email"
							name="emailUser"
							type="email"
							id="chemail"
							ref={email}
							required
						/>
						<InputEditProfile
							placeholder="Password"
							name="passwUser"
							type="password"
							id="chpassword"
							ref={password}
						/>
					</ContainerInputs>
					<ContainerButtonSave>
						<ButtonSaveProfile type="submit">Save</ButtonSaveProfile>
					</ContainerButtonSave>
				</ContainerInfosUser>
			</ContainerProfile>
			<Footer />
		</>
	);
};

export default ChangeProfile;
