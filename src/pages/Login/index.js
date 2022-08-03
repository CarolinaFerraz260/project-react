import React from "react";
import { inputProfile, buttonSubmit } from "./styles";

const Login = () => {
  return (
    <>
      <form>
        Name:{" "}
        <inputProfile
          placeholder="Name"
          name="nameUser"
          type="text"
        ></inputProfile>
        Email:{" "}
        <inputProfile
          placeholder="Email"
          name="emailUser"
          type="email"
        ></inputProfile>
        Password:{" "}
        <inputProfile
          placeholder="Password"
          name="passwUser"
          type="password"
        ></inputProfile>
        Image: <inputProfile name="imageUser" type="file"></inputProfile>
        <buttonSubmit type="submit">Submit</buttonSubmit>
      </form>
    </>
  );
};

export default Login;
