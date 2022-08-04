import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import Livro from "../../assets/Livro.jpg";
import { useNavigate } from "react-router-dom";
// import Menu from "../../components/Menu";
import HeaderProfile from "../../assets/headerProfile.jpg";
import {
  ContainerPageProfile,
  ImageHeaderProfile,
  ContainerProfileAndBooks,
  ContainerProfile,
  NameUser,
  ImageUser,
  ContainerInfosProfile,
  TitleInfoProfile,
  DescriptionInfoProfile,
  ContainerBooksUser,
} from "./styles";

const Profile = () => {
<<<<<<< HEAD
  const token = document.cookie
    .split("; ")
    .map((a) => a.split("="))
    .filter(([a, b]) => a === "token")
    .flat();
=======
  let navigate = useNavigate();
>>>>>>> 5b9d31328edac54364dd10a7f643f518c4034a1d
  const [userDtata, setUserData] = useState({});
  const [tokenValid, setTokenValid] = useState(true);

  useEffect(() => {
    const token = document.cookie.split("; ").map(a => a.split("=")).filter(([a, b]) => a === "token").flat();
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
<<<<<<< HEAD
    if (!tokenValid) navigate("../home");
  }, [tokenValid]);
=======
    if (!tokenValid) navigate("../home")
  }, [tokenValid, navigate]);
>>>>>>> 5b9d31328edac54364dd10a7f643f518c4034a1d
  return (
    <>
      <Header />
      {/* <Menu /> */}
      <ContainerPageProfile>
        <ImageHeaderProfile src={HeaderProfile}></ImageHeaderProfile>
        <ContainerProfileAndBooks>
          <ContainerProfile>
            {/* Infos do user */}
<<<<<<< HEAD
            <ImageUser src={userDtata.profile_picture} alt="User" />
=======
>>>>>>> 5b9d31328edac54364dd10a7f643f518c4034a1d
            <NameUser>{userDtata.name}</NameUser>
            <ContainerInfosProfile>
              <TitleInfoProfile>Email</TitleInfoProfile>
              {/* Infos do user */}
              <DescriptionInfoProfile>{userDtata.email}</DescriptionInfoProfile>
            </ContainerInfosProfile>
<<<<<<< HEAD
=======
            <ContainerInfosProfile>
              <TitleInfoProfile>Location</TitleInfoProfile>
              {/* Infos do user */}
              <DescriptionInfoProfile>Porto, Portugal</DescriptionInfoProfile>
            </ContainerInfosProfile>
            <ContainerInfosProfile>
              <TitleInfoProfile>Joined</TitleInfoProfile>
              {/* Infos do user */}
              <DescriptionInfoProfile>June 2018</DescriptionInfoProfile>
            </ContainerInfosProfile>
>>>>>>> 5b9d31328edac54364dd10a7f643f518c4034a1d
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
