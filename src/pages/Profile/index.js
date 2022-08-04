import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import { Navigate } from "react-router-dom";
import {
  ContainerPageProfile,
  ContainerImageUser,
  ContainerProfileAndBooks,
  ContainerProfile,
  NameUser,
  ImageUser,
  ContainerInfosProfile,
  EmailProfileUser,
  ContainerBooksUser,
} from "./styles";

const Profile = () => {
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
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: token[1],
          }),
        });

        const jsonResponse = await response.json();
        setTokenValid(true);
        setUserData(jsonResponse.data);
        const booksResponse = await fetch(`api/book`, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonBooksResponse = await booksResponse.json();
        const userBooksData = jsonBooksResponse.data.filter(
          (book) => book.user.id === jsonResponse.data.id
        );
        setuserBooks(userBooksData);
      } catch (err) {
        setTokenValid(false);
        console.error(err.message);
      }
    }
    profileData();
  }, []);

  return (
    <>
      {!tokenValid ? (
        <div>
          <Navigate to="../home" replace={true} />
        </div>
      ) : (
        <>
          <Header />
          {/* <ContainerPageProfile> */}
            <ContainerProfileAndBooks>
              <ContainerProfile>
                <ContainerImageUser>
                  <ImageUser src={userDtata?.profile_picture} alt="User" />
                </ContainerImageUser>
                <NameUser>{userDtata?.name}</NameUser>
                <ContainerInfosProfile>
                  <EmailProfileUser>{userDtata?.email}</EmailProfileUser>
                </ContainerInfosProfile>
              </ContainerProfile>
              <ContainerBooksUser>
                {userBooks.map((book, index) => (
                  <Book image={book?.book_cover} key={index} />
                ))}
              </ContainerBooksUser>
            </ContainerProfileAndBooks>
          {/* </ContainerPageProfile> */}
          <Footer />
        </>
      )}
    </>
  );
};

export default Profile;
