import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: fit-content;
  margin: 20px;
`;

export const Links = styled(Link)`
  padding: 8px 20px;
  margin: 8px;
  text-decoration: none;
  font-family: "Anton", sans-serif;
  font-style: bold;
  color: #000;
  opacity: 80%;
  text-align: center;

  &:hover {
    background-color: #fdc544;
    color: #fff3c9;
    opacity: 100%;
  }
`;
