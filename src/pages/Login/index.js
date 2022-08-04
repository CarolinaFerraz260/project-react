import React, { useState } from "react";
import Image from "../../assets/main.png";
import { useNavigate, Navigate } from "react-router-dom";
import Footer from "../../components/Footer";
import potato from "../../assets/beautifulpotato.png";
import { Link } from "react-router-dom";

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
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  async function loginUser(credentials) {
    try {
      console.log(credentials);

      const data = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      console.log(data);
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
    await loginUser({ email, password });
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
