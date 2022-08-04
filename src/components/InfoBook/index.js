import {
  ContainerBook,
  ImageBook,
  ContainerInfoBook,
  TitleBook,
  DescriptionBook,
  YearBook,
} from "./styles";

const InfoBook = ({ book }) => {
  return (
    <>
      <ContainerBook>
<<<<<<< HEAD
        <ImageBook src={Image}></ImageBook>
=======
        <ImageBook src={book.book_cover}></ImageBook>
>>>>>>> d35a77e39fbb1d0b23fac6119baf0523da974ea4
        <ContainerInfoBook>
          <TitleBook>{book.title}</TitleBook>
          <DescriptionBook>{book.description}</DescriptionBook>
          <YearBook>{book.year} </YearBook>
        </ContainerInfoBook>
      </ContainerBook>
    </>
  );
};

export default InfoBook;
