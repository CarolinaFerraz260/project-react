import {
  ContainerBook,
  ContainerImage,
  ImageBook,
  ContainerButtonLike,
  TitleBook,
} from "./styles";

const Book = ({ image, title, showInfo }) => {
  return (
    <>
      <ContainerBook>
        <TitleBook>{title}</TitleBook>
        <ContainerImage>
          <ImageBook src={image} onClick={showInfo}></ImageBook>
        </ContainerImage>
        <ContainerButtonLike></ContainerButtonLike>
      </ContainerBook>
    </>
  );
};

export default Book;
