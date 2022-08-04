import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Livro from "../../assets/Livro.jpg";
import {
  ContainerBook,

  ContainerInfosBook,
  ContainerImageBook,
  InputChangeImage,
  ContainerInputs,
  InputEditBook,
  ImageBook,
  ContainerButtonSave,
  ButtonSaveBook,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
const ChangeBook = () => {
  const navigate = useNavigate();
  const info = useLocation();
  const book = info.state;

  useEffect(() => {
    document.querySelector("#old_book_title").value = book.title;
    document.querySelector("#old_book_description").value = book.description;
    document.querySelector("#old_book_year").value = book.year;
    document.querySelector("#old_book_url").value = book.book_cover;
  }, []);

  async function updateBook(e) {
    e.preventDefault();
    const token = document.cookie
      .split("; ")
      .map((a) => a.split("="))
      .filter(([a, b]) => a === "token")
      .flat();
    const newTitle = e.target.querySelector("#old_book_title").value;
    const newDescription = e.target.querySelector("#old_book_description").value;
    const newYear = e.target.querySelector("#old_book_year").value;
    const newUrl = e.target.querySelector("#old_book_url").value;
    const updatedBook = {
      title: newTitle,
      description: newDescription,
      year: Number(newYear),
      book_cover: newUrl
    }
    try {
      await fetch(`/api/book/${book.id}`, {
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: token[1]
        }),
        body: JSON.stringify(updatedBook),
      });
      navigate("../profile");
    } catch (err) {
    }
  }
  return (
    <>
      <Header />
      <ContainerBook>
        <ContainerInfosBook onSubmit={updateBook}>
          <ContainerImageBook>
            <ImageBook src={book.book_cover} />
          </ContainerImageBook>
          <ContainerInputs>
            <label>
              <InputChangeImage name="imageBook" type="text" placeholder="Book url" id="old_book_url"></InputChangeImage>
            </label>
            <InputEditBook
              placeholder="Book title"
              name="titleBook"
              type="text"
              id="old_book_title"
            />
            <InputEditBook
              placeholder="Book description"
              name="descriptionBook"
              type="text"
              id="old_book_description"
            />
            <InputEditBook
              placeholder="Book year"
              name="yearBook"
              type="number"
              id="old_book_year"
            />
          </ContainerInputs>
          <ContainerButtonSave>
            <ButtonSaveBook>Save</ButtonSaveBook>
          </ContainerButtonSave>
        </ContainerInfosBook>
      </ContainerBook>
      <Footer />
    </>
  );
};

export default ChangeBook;
