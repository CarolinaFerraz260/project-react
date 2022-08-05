import { ContainerFooter } from "./styles";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <ContainerFooter>
      <p>Potato Books</p>
      <p>© {year} The cool team. All Rights Reserved.</p>
    </ContainerFooter>
  );
};

export default Footer;
