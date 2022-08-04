import React, { useState } from "react";
import {
  ContainerBook,
  ContainerImage,
  ImageBook,
  ContainerButtonLike,
  ButtonLike,
  TitleBook,
} from "./styles";
import iconLikeEnabled from "../../assets/iconLikeEnabled.svg";
import iconLikeDisabled from "../../assets/iconLikeDisabled.svg";

const likes = {
  likeEnabled: iconLikeEnabled,
  likeDisabled: iconLikeDisabled,
};

const Book = ({ image, title, showInfo }) => {
  const [like, setLike] = useState(false);

  const changeImage = () => {
    setLike((state) => !state);
  };
  return (
    <>
      <ContainerBook>
        <TitleBook>{title}</TitleBook>
        <ContainerImage>
          <ImageBook src={image} onClick={showInfo}></ImageBook>
        </ContainerImage>
        <ContainerButtonLike>
          <ButtonLike onClick={changeImage}>
            <img
              src={like ? likes.likeEnabled : likes.likeDisabled}
              alt="like"
            />
          </ButtonLike>
        </ContainerButtonLike>
      </ContainerBook>
    </>
  );
};

export default Book;
