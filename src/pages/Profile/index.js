import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import { Navigate, useNavigate } from "react-router-dom";
import {
  ContainerProfileAndBooks,
  ContainerProfile,
  NameUser,
  ImageUser,
  EmailProfileUser,
  ContainerBooksUser,
} from "./styles";

const Profile = () => {
  const navigate = useNavigate();
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

  function showInfo(book) {
    navigate("../aboutbook", { state: book });
  }

  return (
    <>
      {!tokenValid ? (
        <div>
          <Navigate to="../home" replace={true} />
        </div>
      ) : (
        <>
          <Header />
          <ContainerProfileAndBooks>
            <ContainerProfile>
              <ImageUser src={userDtata?.profile_picture} alt="User" />
              <NameUser>{userDtata?.name}</NameUser>
              <EmailProfileUser>{userDtata?.email}</EmailProfileUser>
            </ContainerProfile>
            <ContainerBooksUser>
              {userBooks.map((book, index) => (
                <Book
                  image={book?.book_cover}
                  key={index}
                  showInfo={() => showInfo(book)}
                />
              ))}
            </ContainerBooksUser>
          </ContainerProfileAndBooks>
          <Footer />
        </>
      )}
    </>
  );
};

export default Profile;
