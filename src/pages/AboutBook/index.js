import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InfoBook from "../../components/InfoBook";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const AboutBook = () => {
  const navigate = useNavigate();
  const info = useLocation();
  const book = info.state;
  useEffect(() => {
    if (book === null) navigate("../home");
  }, [])


  return (
    <>
      <div></div>
      <Header />
      {book !== null ? <InfoBook book={book} /> : null}
      <Footer />
    </>
  );
};

export default AboutBook;
