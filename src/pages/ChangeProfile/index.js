import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Livro from "../../assets/Livro.jpg";
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
  return (
    <>
      <Header />
      <ContainerProfile>
        <ContainerInfosUser>
          <ContainerImageUser>
            <ImageUser src={Livro} />
          </ContainerImageUser>
          <ContainerInputs>
            <label>
              Choose
              <InputChangeImage name="nameUser" type="file"></InputChangeImage>
            </label>
            <InputEditProfile
              placeholder="User name"
              name="nameUser"
              type="text"
            />
            <InputEditProfile
              placeholder="Email"
              name="emailUser"
              type="email"
            />
            <InputEditProfile
              placeholder="Password"
              name="passwUser"
              type="password"
            />
          </ContainerInputs>
        </ContainerInfosUser>
      </ContainerProfile>
      <ContainerButtonSave>
        <ButtonSaveProfile>Save</ButtonSaveProfile>
      </ContainerButtonSave>
      <Footer />
    </>
  );
};

export default ChangeProfile;
