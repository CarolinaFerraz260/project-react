import React, { useState } from "react";
import {
  ContainerBook,
  ImageBook,
  ContainerInfoBook,
  TitleBook,
  DescriptionBook,
  YearBook,
} from "./styles";
import Image from "../../assets/Livro.jpg";

const InfoBook = ({}) => {
  return (
    <>
      <ContainerBook>
        <ImageBook src={Image}></ImageBook>
        <ContainerInfoBook>
          <TitleBook>OLA</TitleBook>
          <DescriptionBook>ODOEDe</DescriptionBook>
          <YearBook>drddr</YearBook>
        </ContainerInfoBook>
      </ContainerBook>
    </>
  );
};

export default InfoBook;
