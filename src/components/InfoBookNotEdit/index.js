import {
  ContainerBook,
  ImageBook,
  ContainerInfoBook,
  TitleBook,
  DescriptionBook,
  YearBook,
  ContainerButtonBack,
  ButtonBack,
} from "./styles";

const InfoBookNotEdit = ({ book }) => {
  return (
    <>
      <ContainerBook>
        <ContainerButtonBack>
          <ButtonBack to="/search">◀</ButtonBack>
        </ContainerButtonBack>
        <div>
          <ImageBook src={book.book_cover}></ImageBook>
        </div>
        <ContainerInfoBook>
          <TitleBook>{book.title}</TitleBook>
          <DescriptionBook>{book.description}</DescriptionBook>
          <YearBook>{book.year}</YearBook>
        </ContainerInfoBook>
      </ContainerBook>
    </>
  );
};

export default InfoBookNotEdit;
