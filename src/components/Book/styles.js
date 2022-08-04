import styled from "styled-components";

export const ContainerBook = styled.div`
  padding: 20px;
  padding-bottom: 0;
  width: fit-content;
`;

export const TitleBook = styled.p`
  text-align: center;
  margin-bottom: 0;
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export const ImageBook = styled.img`
  margin: 8px;
  max-width: 60%;
  width: 300px;
  height: 225px;
`;

export const ContainerButtonLike = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonLike = styled.button`
  border: none;
  background-color: #fff;
  margin-bottom: 0;

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.3);
  }
`;
