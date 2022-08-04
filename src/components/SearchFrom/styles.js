import styled from "styled-components";

export const ContainerForm = styled.form`
  background-color: #fdc544;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  padding: 20px;
`;

export const ContainerInputAndLabel = styled.div`
  margin-right: 34px;
`;

export const InputFilter = styled.input`
  border-radius: 50px;

  &:checked {
    background-color: #3ed;
  }
`;

export const Span = styled.span`
  background-color: #3ed;
`;

export const LabelFilter = styled.label`
  color: #fff;
  font-weight: bold;
`;
