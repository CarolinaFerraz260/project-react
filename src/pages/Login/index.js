import React, { useState } from "react";
/* import Axios from "axios"; */
import Image from "../../assets/main.png";
<<<<<<< HEAD
import Header from "../../components/Header";
import Footer from "../../components/Footer";
=======
/* import Proxy from "http-proxy-middleware"; */

>>>>>>> 32308a8af30b80d10102769d10069504fcfa96fb
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

<<<<<<< HEAD

const Login = () => {
=======
const Login = ({ handleSubmit }) => {
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();

>>>>>>> 32308a8af30b80d10102769d10069504fcfa96fb
  return (
    <>
    <Header/>
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
