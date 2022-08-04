import React, { useState } from "react";
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
import Footer from "../../components/Footer";

const Register = () => {
  const [name, setUserName] = useState();
  const [password, setUserPassword] = useState();
  const [email, setUserEmail] = useState();
  const [message, setMessage] = useState("");
  let isOk = true;

  async function RegisterUser(credentials) {
    return fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((data) => {
        if (!data.ok) isOk = false;
        return data.json();
      })
      .then((data) => {
        if (!isOk) {
          isOk = true;
          throw new Error(data.errors[0]);
        }
        setMessage("Account Created");
      })
      .catch((error) => setMessage(error.message));
  }

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    await RegisterUser({ email, password, name });
  };

  return (
    <>
      <ContainerFormLogin>
        <FormLogin onSubmit={(e) => handleSubmit(e, email, password, name)}>
          <ContainerImage>
            <ImageRegister src={Image} alt="User" />
          </ContainerImage>
          <InputProfile
            placeholder="Email"
            name="nameUser"
            type="email"
            onChange={(e) => setUserEmail(e.target.value)}
          ></InputProfile>
          <InputProfile
            placeholder="Username"
            name="name"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          ></InputProfile>
          <InputProfile
            placeholder="Password"
            name="passwUser"
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
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
      <div>{message}</div>
      <Footer />
    </>
  );
};

export default Register;
