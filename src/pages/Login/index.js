import React from "react";
import {
  ContainerFormLogin,
  FormLogin,
  InputProfile,
  ImageLogin,
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
          <ImageLogin href="../../assets/main.png"></ImageLogin>
          <InputProfile
            placeholder="Name"
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
