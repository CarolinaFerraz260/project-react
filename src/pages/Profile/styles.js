import styled from "styled-components";

export const ContainerProfileAndBooks = styled.div`
  display: flex;
`;

export const ContainerProfile = styled.div`
  max-width: 10%;
  margin: 8px 24px;
`;

export const NameUser = styled.p`
  color: #fdc544;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
  max-width: fit-content;
`;

export const ContainerImageUser = styled.div`
  max-width: fit-content;
`;

export const ImageUser = styled.img`
  margin-top: 16px;
  border-radius: 50%;
  max-width: 80%;
`;

export const ContainerInfosProfile = styled.div`
  padding: 0;
`;

export const EmailProfileUser = styled.p`
  color: #000;
  font-size: 16px;
  opacity: 70%;
  width: fit-content;
`;

export const ContainerButtonChange = styled.div`
  display: flex;
  justify-content: left;
`;

export const ButtonChangeProfile = styled.button`
  background-color: #fdc544;
  color: #fff;
  border-radius: 16px;
  border: none;
  padding: 8px 20px;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 8px;

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
  }
`;

export const ContainerBooksUser = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerButton = styled.div`
  text-align: center;
  margin-top: 0;
`;

export const ButtonDelete = styled.button`
  border: none;
  background-color: #fff;
  margin-bottom: 20px;
  margin-top: 0;

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.3);
  }
`;
