import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerMenu = styled.div`
  background-color: #fff;
  border-bottom: solid 1px #fdc544;
  width: fit-content;
  margin: 20px;
`;

export const Links = styled(Link)`
  display: block;
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
    color: #FFF3C9;
    opacity: 100%;
  }
`;
