import React from "react";
// import {} from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import Livro from "../../assets/Livro.jpg";

//chamar o footer, header, etc aqui
const Home = () => {
  return (
    <>
      <Header />
      <Book image={Livro}></Book>
      <Footer />
    </>
  );
};

export default Home;
