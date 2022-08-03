import React, { useState } from "react";
import {
  ContainerBook,
  ImageBook,
  ContainerButtonLike,
  ButtonLike,
} from "./styles";
import iconLikeEnabled from "../../assets/iconLikeEnabled.svg";
import iconLikeDisabled from "../../assets/iconLikeDisabled.svg";

const likes = {
  likeEnabled: iconLikeEnabled,
  likeDisabled: iconLikeDisabled,
};

const Book = ({ image }) => {
  const [like, setLike] = useState(false);

  const changeImage = () => {
    setLike((state) => !state);
  };

  return (
    <>
      <ContainerBook>
        <ImageBook src={image}></ImageBook>
        <ContainerButtonLike>
          <ButtonLike onClick={changeImage}>
            <img src={like ? likes.likeEnabled : likes.likeDisabled} alt="like" />
          </ButtonLike>
        </ContainerButtonLike>
      </ContainerBook>
    </>
  );
};

export default Book;
