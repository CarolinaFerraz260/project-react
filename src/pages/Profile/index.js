import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
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
  const [userBooks, setuserBooks] = useState([]);
  useEffect(() => {

    async function profileData() {
      const token = document.cookie
        .split("; ")
        .map((a) => a.split("="))
        .filter(([a, b]) => a === "token")
        .flat();
      try {
        const response = await fetch(`api/user/profile`, {
          method: "get",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: token[1],
          }),
        })
        const jsonResponse = await response.json();
        setTokenValid(true);
        setUserData(jsonResponse.data)
        const booksResponse = await fetch(`api/book`, {
          method: "get",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const jsonBooksResponse = await booksResponse.json();
        const userBooksData = jsonBooksResponse.data.filter(book => book.user.id === jsonResponse.data.id)
        setuserBooks(userBooksData);

      } catch (err) {
        setTokenValid(false);
        console.error(err.message);
      }
    }
    profileData();
  }, []);

  useEffect(() => {
    console.log(userDtata)
    if (!tokenValid) navigate("../home");
  }, [tokenValid, navigate, userDtata]);

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
          </ContainerProfile >
          <ContainerBooksUser>
            {userBooks.map(book => <Book image={book.book_cover} />)}
          </ContainerBooksUser>
        </ContainerProfileAndBooks >
      </ContainerPageProfile >
      <Footer />
    </>
  );
}

export default Profile;
