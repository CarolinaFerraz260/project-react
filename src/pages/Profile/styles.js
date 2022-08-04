import styled from "styled-components";

export const ContainerProfileAndBooks = styled.div`
  display: flex;
`;

export const ContainerProfile = styled.div`
  max-width: 10%;
  margin: 0px 24px;
  max-width: fit-content;
`;

export const ImageUser = styled.img`
  margin-top: 16px;
  border-radius: 50%;
  max-width: 80%;
`;

export const NameUser = styled.p`
  color: #fdc544;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
`;

export const EmailProfileUser = styled.p`
  color: #000;
  font-size: 16px;
  opacity: 70%;
  width: fit-content;
  margin-top: 8px;
`;

export const ContainerBooksUser = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
