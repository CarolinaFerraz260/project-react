import React from "react";
import { ContainerBooks } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import Livro from "../../assets/Livro.jpg";
import Livro2 from "../../assets/Livro2.jpg";
import Livro3 from "../../assets/Livro3.jpg";
import Livro4 from "../../assets/Livro4.jpg";
import Livro5 from "../../assets/Livro5.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <ContainerBooks>
        <Book image={Livro}></Book>
        <Book image={Livro2}></Book>
        <Book image={Livro3}></Book>
        <Book image={Livro4}></Book>
      </ContainerBooks>
      <ContainerBooks>
        <Book image={Livro5}></Book>
        <Book image={Livro2}></Book>
        <Book image={Livro3}></Book>
        <Book image={Livro3}></Book>
      </ContainerBooks>
      <ContainerBooks>
        <Book image={Livro}></Book>
        <Book image={Livro2}></Book>
        <Book image={Livro3}></Book>
        <Book image={Livro3}></Book>
      </ContainerBooks>
      <Footer />
    </>
  );
};

export default Home;
