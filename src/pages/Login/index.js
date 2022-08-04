import React, { useState } from "react";
import Image from "../../assets/main.png";
import { Navigate } from 'react-router-dom';
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
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  async function loginUser(credentials) {
    try {
      const data = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
      const jsonData = await data.json();
      document.cookie = `token=${jsonData.data.token}`;
      setLogin(true);
    } catch (err) {
      setErrMessage(err.message);
      document.cookie = `token=`;
      setLogin(false);
    }
  }

  async function handleSubmit(e, email, password) {
    e.preventDefault();
    await loginUser({ email, password })
  };


  return (
    <>

      {login ?
        <div>
          <Navigate to="../home" replace={true} />
        </div>
        :
        <>
          <div>{errMessage}</div>
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
        </>
      }
    </>
  );
};

export default Login;
