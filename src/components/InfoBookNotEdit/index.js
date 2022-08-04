import React from "react";
import Livro from "../../assets/Livro.jpg";
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

const InfoBookNotEdit = ({ }) => {
  return (
    <>
      <ContainerBook>
        <ContainerButtonBack>
          <ButtonBack to="/search">◀</ButtonBack>
        </ContainerButtonBack>
        <div>
          <ImageBook src={Livro}></ImageBook>
        </div>
        <ContainerInfoBook>
          <TitleBook>TITULO</TitleBook>
          <DescriptionBook>DESCRICAO</DescriptionBook>
          <YearBook>ANO </YearBook>
        </ContainerInfoBook>
      </ContainerBook>
    </>
  );
};

export default InfoBookNotEdit;
