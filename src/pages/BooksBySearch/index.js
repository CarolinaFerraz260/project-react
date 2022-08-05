import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InfoBookNotEdit from "../../components/InfoBookNotEdit";
import { useLocation } from "react-router-dom";

const BooksBySearch = () => {
  const info = useLocation();
  const book = info.state;
  return (
    <>
      <div></div>
      <Header />
      <InfoBookNotEdit book={book} />
      <Footer />
    </>
  );
};

export default BooksBySearch;
