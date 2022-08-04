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

const AddBook = () => {
  return (
    <>
      <Header />
      <ContainerBook>
        <ContainerInfosBook>
          <ContainerImageBook>
            <ImageBook src={Livro} />
          </ContainerImageBook>
          <ContainerInputs>
            <label>
              Choose
              <InputChangeImage name="imageBook" type="text"></InputChangeImage>
            </label>
            <InputEditBook
              placeholder="Book title"
              name="titleBook"
              type="text"
            />
            <InputEditBookDescription
              placeholder="Book description"
              name="descriptionBook"
              type="text"
            />
            <InputEditBook
              placeholder="Book year"
              name="yearBook"
              type="password"
            />
          </ContainerInputs>
        </ContainerInfosBook>
      </ContainerBook>
      <ContainerButtonAdd>
        <ButtonAddBook>Add</ButtonAddBook>
      </ContainerButtonAdd>
      <Footer />
    </>
  );
};

export default AddBook;

