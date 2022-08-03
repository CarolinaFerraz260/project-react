import React from "react";
import Image from "../../assets/main.png";
import {
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
  return (
    <>
      <ContainerFormLogin>
        <FormLogin>
          <ContainerImage>
            <img src={Image} alt="User" />
          </ContainerImage>
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
              <ButtonLogin type="submit">Login</ButtonLogin>
            </ContainerButton>
            <ContainerButton>
              {" "}
              <ButtonRegister type="submit">Register</ButtonRegister>
            </ContainerButton>
          </ContainerAllButtons>
        </FormLogin>
      </ContainerFormLogin>
    </>
  );
};

export default Login;
