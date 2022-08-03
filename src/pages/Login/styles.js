import styled from "styled-components";

export const Container = styled.div`
  background-color: #1c1c1c;
  max-width: 80%;
  margin: auto;
  padding: 16px 10px;
  border-radius: 14px;
  border: solid 1px #a9a9a9;
`;

export const inputProfile = styled.input`
  background-color: #1c1c1c;
  height: 40px;
  width: 100%;
  border: none;
  margin-bottom: 10px;
  color: white;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
  padding: 8px;
  justify-content: center;

  &::placeholder {
    color: #ede;
  }
`;

export const buttonSubmit = styled.button`
    background-color: #1c1c1c;
    border-radius: 16px;
    border: none;
    color: #fff;
`;
