import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import { Navigate, useNavigate } from "react-router-dom";
import iconDelete from "../../assets/iconDelete.svg";
import {
  ContainerProfileAndBooks,
  ContainerProfile,
  NameUser,
  ImageUser,
  EmailProfileUser,
  ContainerButtonChange,
  ButtonChangeProfile,
  ContainerBooksUser,
  ContainerButton,
  ButtonDelete,
} from "./styles";

const Profile = () => {
  const navigate = useNavigate();
  const [userDtata, setUserData] = useState({});
  const [tokenValid, setTokenValid] = useState(true);
  const [userBooks, setuserBooks] = useState([]);
  const token = document.cookie
    .split("; ")
    .map((a) => a.split("="))
    .filter(([a, b]) => a === "token")
    .flat();
  useEffect(() => {
    profileData();
  }, []);
  async function profileData() {

    try {
      const response = await fetch(`api/user/profile`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: token[1]
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
  function showInfo(book) {
    navigate("../aboutbook", { state: book });
  }
  async function deleteBook(id) {
    await fetch(`/api/book/${id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token[1]
      }),
    });
    profileData();
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
              <ContainerButtonChange>
                <ButtonChangeProfile onClick={() => navigate("../changeprofile", { state: userDtata })}>Edit</ButtonChangeProfile>
              </ContainerButtonChange>
            </ContainerProfile>
            <ContainerBooksUser>
              {userBooks.map((book, index) => (
                <ContainerButton key={(index + 200)}>
                  <Book
                    image={book?.book_cover}
                    key={index}
                    showInfo={() => showInfo(book)}
                  />
                  <ButtonDelete key={(index + 100)}>
                    <img src={iconDelete} alt="delete" onClick={() => deleteBook(book.id)} />
                  </ButtonDelete>
                </ContainerButton>
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
