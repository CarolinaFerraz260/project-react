import React from "react";
import { ContainerBooks } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import Livro from "../../assets/Livro.jpg";
import Livro2 from "../../assets/Livro2.jpg";
import Livro3 from "../../assets/Livro3.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <ContainerBooks>
        {/* TODO colocar o livro correto aparecer */}
        <Book image={Livro}></Book>
        <Book image={Livro2}></Book>
        <Book image={Livro3}></Book>
      </ContainerBooks>
      <Footer />
    </>
  );
};

export default Home;
