import styled from "styled-components";

export const ContainerFormLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px 40px;
`;

export const FormLogin = styled.form`
  margin: 20px 200px;
`;

export const ImageLogin = styled.image`
  display: flex;
  justify-content: center;
`;

export const InputProfile = styled.input`
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));
  height: 40px;
  width: 100%;
  border: none;
  margin-bottom: 10px;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
  padding: 8px;
  justify-content: center;

  &::placeholder {
    color: #000;
    opacity: 30%;
    justify-content: center;
  }
`;

export const InputImage = styled.input`
  width: 139px;
  height: 139px;
  background: #f3f3f3;
  border-radius: 8px;
`;

export const ContainerAllButtons = styled.div`
  margin-top: 24px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonLogin = styled.button`
  border: none;
  color: #fff;
  padding: 8px 44px;
  background: #fdc544;
  border-radius: 4px;
`;

export const ButtonRegister = styled.button`
  margin-top: 8px;
  border: none;
  color: #fdc544;
  padding: 8px 36px;
  background: #fff5d4;
  border-radius: 4px;
`;
