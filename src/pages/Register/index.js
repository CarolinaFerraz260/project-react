import React from "react";
import {
  ContainerFormLogin,
  FormLogin,
  InputProfile,
  ContainerImage,
  ImageRegister,
  ContainerAllButtons,
  ContainerButton,
  ButtonLogin,
  ButtonRegister,
} from "./styles";
import Image from "../../assets/register.jpg";

const Register = () => {
  return (
    <>
      <ContainerFormLogin>
        <FormLogin>
          <ContainerImage>
            <ImageRegister src={Image} alt="User" />
          </ContainerImage>
          <InputProfile
            placeholder="Email"
            name="nameUser"
            type="email"
          ></InputProfile>
          <InputProfile
            placeholder="Username"
            name="nameUser"
            type="text"
          ></InputProfile>
          <InputProfile
            placeholder="Password"
            name="passwUser"
            type="password"
          ></InputProfile>
          <ContainerAllButtons>
            <ContainerButton>
              <ButtonRegister type="submit">Register</ButtonRegister>
            </ContainerButton>
            <ContainerButton>
              {" "}
              <ButtonLogin type="submit">Login</ButtonLogin>
            </ContainerButton>
          </ContainerAllButtons>
        </FormLogin>
      </ContainerFormLogin>
    </>
  );
};

export default Register;
