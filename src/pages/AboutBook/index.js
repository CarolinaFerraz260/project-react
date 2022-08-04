import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InfoBook from "../../components/InfoBook";
import { useLocation } from "react-router-dom";


const AboutBook = () => {
  const info = useLocation();
  const book = info.state;
  return (
    <>
      <div></div>
      <Header />
      <InfoBook book={book} />
      <Footer />
    </>
  );
};

export default AboutBook;
