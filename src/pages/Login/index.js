import React, { useState } from "react";
import Image from "../../assets/main.png";
import Footer from "../../components/Footer";

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

const Login = ({ handleSubmit }) => {
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <ContainerFormLogin>
        <FormLogin onSubmit={(e) => handleSubmit(e, email, password)}>
          <ContainerImage>
            <img src={Image} alt="User" />
          </ContainerImage>
          <InputProfile
            placeholder="Username"
            name="email"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          ></InputProfile>
          <InputProfile
            placeholder="Password"
            name="passwUser"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
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
      <Footer/>
    </>
  );
};

export default Login;
