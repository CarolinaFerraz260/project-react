import React from "react";
import { ContainerBooks } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import Menu from "../../components/Menu";
import Livro from "../../assets/Livro.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <ContainerBooks>
        <Book image={Livro}></Book>
        <Book image={Livro}></Book>
        <Book image={Livro}></Book>
      </ContainerBooks>
      <Footer />
    </>
  );
};

export default Home;
