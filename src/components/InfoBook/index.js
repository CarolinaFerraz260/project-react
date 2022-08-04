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
        <ImageBook src={book.book_cover}></ImageBook>
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
