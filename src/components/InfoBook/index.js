import {
  ContainerBook,
  ImageBook,
  ContainerInfoBook,
  TitleBook,
  DescriptionBook,
  YearBook,
  ContainerButtonChange,
  ButtonChangeBook,
  ContainerButtonBack,
  ButtonBack,
} from "./styles";

const InfoBook = ({ book }) => {
  return (
    <>
      <ContainerBook>
        <ContainerButtonBack>
          {" "}
          <ButtonBack> ◀</ButtonBack>
        </ContainerButtonBack>

        <div>
          <ImageBook src={book.book_cover}></ImageBook>
          <ContainerButtonChange>
            <ButtonChangeBook>Edit</ButtonChangeBook>
          </ContainerButtonChange>
        </div>
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
