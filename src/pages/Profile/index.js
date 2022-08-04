import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import Livro from "../../assets/Livro.jpg";
import { useNavigate } from "react-router-dom";
import HeaderProfile from "../../assets/headerProfile.jpg";
import {
  ContainerPageProfile,
  ContainerImageUser,
  ImageHeaderProfile,
  ContainerProfileAndBooks,
  ContainerProfile,
  NameUser,
  ImageUser,
  ContainerInfosProfile,
  EmailProfileUser,
  ContainerBooksUser,
} from "./styles";

const Profile = () => {
  let navigate = useNavigate;
  const [userDtata, setUserData] = useState({});
  const [tokenValid, setTokenValid] = useState(true);

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .map((a) => a.split("="))
      .filter(([a, b]) => a === "token")
      .flat();
    fetch(`api/user/profile`, {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token[1],
      }),
    })
      .then((response) => {
        if (response.ok) {
          setTokenValid(true);
          return response.json();
        }
        setTokenValid(false);
        throw new Error("No Auth");
      })
      .then((json) => setUserData(json.data))
      .catch((a) => console.error(a.message));
  }, []);

  useEffect(() => {
    if (!tokenValid) navigate("../home");
  }, [tokenValid, navigate]);
  return (
    <>
      <Header />
      <ContainerPageProfile>
        <ImageHeaderProfile src={HeaderProfile}></ImageHeaderProfile>
        <ContainerProfileAndBooks>
          <ContainerProfile>
            {/* Infos do user */}
            <ContainerImageUser>
              {" "}
              <ImageUser src={userDtata.profile_picture} alt="User" />
            </ContainerImageUser>

            <NameUser>{userDtata.name}</NameUser>
            <ContainerInfosProfile>
              {/* Infos do user */}
              <EmailProfileUser>{userDtata.email}</EmailProfileUser>
            </ContainerInfosProfile>
          </ContainerProfile>
          <ContainerBooksUser>
            <Book image={Livro} />
            <Book image={Livro} />
            <Book image={Livro} />
          </ContainerBooksUser>
        </ContainerProfileAndBooks>
      </ContainerPageProfile>
      <Footer />
    </>
  );
};

export default Profile;
