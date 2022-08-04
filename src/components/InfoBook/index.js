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
import { useNavigate } from "react-router-dom";
const InfoBook = ({ book }) => {
  const navigate = useNavigate();
  return (
    <>
      <ContainerBook>
        <ContainerButtonBack>
          {" "}
          <ButtonBack onClick={() => navigate("../profile")}> ◀</ButtonBack>
        </ContainerButtonBack>

        <div>
          <ImageBook src={book.book_cover}></ImageBook>
          <ContainerButtonChange>
            <ButtonChangeBook onClick={() => navigate("../changebook", { state: book })} >Edit</ButtonChangeBook>
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
