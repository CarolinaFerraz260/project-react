import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Livro from "../../assets/Livro.jpg";
import { useLocation, useNavigate } from "react-router-dom";
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

const ChangeProfile = () => {
  const navigate = useNavigate();
  const info = useLocation();
  const user = info.state;

  useEffect(() => {
    document.querySelector("#chname").value = user.name;
    document.querySelector("#chemail").value = user.email;
    document.querySelector("#chimg").value = user.profile_picture;
  }, []);


  async function updateUser(e) {
    const token = document.cookie
      .split("; ")
      .map((a) => a.split("="))
      .filter(([a, b]) => a === "token")
      .flat();
    e.preventDefault();
    const newName = e.target.querySelector("#chname").value;
    const newEmail = e.target.querySelector("#chemail").value;
    const newImgLink = e.target.querySelector("#chimg").value;
    const newPassword = e.target.querySelector("#chpassword").value;
    const updatedUser = {
      name: newName,
      email: newEmail,
      profile_picture: newImgLink
    }
    if (newPassword !== "") updatedUser.password = newPassword;
    try {
      await fetch("/api/user/profile", {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: token[1]
        }),
        body: JSON.stringify(updatedUser),
      });
      navigate("../profile")
    } catch (err) {
    }
  }

  return (
    <>
      <Header />
      <ContainerProfile>
        <ContainerInfosUser onSubmit={updateUser}>
          <ContainerImageUser>
            <ImageUser src={user.profile_picture} />
          </ContainerImageUser>
          <ContainerInputs>
            <label>
              <InputChangeImage name="nameUser" type="text" id="chimg" placeholder="Img Link" required></InputChangeImage>
            </label>
            <InputEditProfile
              placeholder="User name"
              name="nameUser"
              type="text"
              id="chname"
              required
            ></InputEditProfile>
            <InputEditProfile
              placeholder="Email"
              name="emailUser"
              type="email"
              id="chemail"
              required
            ></InputEditProfile>
            <InputEditProfile
              placeholder="Password"
              name="passwUser"
              type="password"
              id="chpassword"
            ></InputEditProfile>
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
