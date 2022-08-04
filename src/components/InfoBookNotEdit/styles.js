import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerBook = styled.div`
  padding: 20px 16px;
  display: flex;
  background-color: #fff;
  border: solid 1px #000;
  margin: 20px 16px;
`;

export const ImageBook = styled.img`
  max-width: 60%;
`;

export const ContainerInfoBook = styled.div`
  margin-left: 0;
`;

export const TitleBook = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #fdc544;
  text-transform: uppercase;
`;

export const DescriptionBook = styled.p`
  font-size: 18px;
  margin-bottom: 0;
`;

export const YearBook = styled.p`
  font-size: 18px;
  color: #696969;
  margin-top: 8px;
`;

export const ContainerButtonBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonBack = styled(Link)`
  color: #fdc544;
  font-weight: bold;
  font-size: 40px;
  background-color: #fff;
  margin-right: 20px;
  height: fit-content;
  text-align: center;
  border: none;

  &:hover {
    transform: scale(1.3);
  }
`;
