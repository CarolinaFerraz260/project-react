import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Livro from "../../assets/addbooks.jpg";
import {
  ContainerBook,
  ContainerInfosBook,
  ContainerImageBook,
  InputChangeImage,
  ContainerInputs,
  InputEditBookDescription,
  InputEditBook,
  ImageBook,
  ContainerButtonAdd,
  ButtonAddBook,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
const AddBook = () => {
  const navigate = useNavigate();
  const token = document.cookie
    .split("; ")
    .map((a) => a.split("="))
    .filter(([a, b]) => a === "token")
    .flat();
  useEffect(() => {
    if (token[1] === "") {
      navigate("../home")
    } else {
      document.querySelector("#add_book_cover").value = "";
      document.querySelector("#add_book_title").value = "";
      document.querySelector("#add_book_description").value = "";
      document.querySelector("#add_book_number").value = "";
    }
  }, []);

  async function addBook(e) {
    e.preventDefault();

    const newUrl = e.target.querySelector("#add_book_cover").value;
    const newTitle = e.target.querySelector("#add_book_title").value;
    const newDescription = e.target.querySelector("#add_book_description").value;
    const newYear = e.target.querySelector("#add_book_number").value;
    const newBook = {
      title: newTitle,
      description: newDescription,
      year: Number(newYear)
    }
    if (newUrl !== "") newBook.book_cover = newUrl;
    try {
      await fetch("/api/book/", {
        method: 'POST',
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: token[1],
        }),
        body: JSON.stringify(newBook)
      })
      navigate("../profile")
    } catch (error) {

    }
  }



  return (
    <>
      <Header />
      <ContainerBook>
        <ContainerInfosBook onSubmit={addBook}>
          <ContainerImageBook>
            <ImageBook src={Livro} />
          </ContainerImageBook>
          <ContainerInputs>
            <InputChangeImage
              name="imageBook"
              type="text"
              placeholder="book cover url"
              id="add_book_cover"
            />
            <InputEditBook
              placeholder="Book title"
              name="titleBook"
              type="text"
              id="add_book_title"
              required
            />
            <InputEditBookDescription
              placeholder="Book description"
              name="descriptionBook"
              type="text"
              id="add_book_description"
              required
            />
            <InputEditBook
              placeholder="Book year"
              name="yearBook"
              type="number"
              id="add_book_number"
              required
            />
          </ContainerInputs>
          <ContainerButtonAdd>
            <ButtonAddBook>Add</ButtonAddBook>
          </ContainerButtonAdd>
        </ContainerInfosBook>
      </ContainerBook>
      <Footer />
    </>
  );
};

export default AddBook;

