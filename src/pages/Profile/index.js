import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import Livro from "../../assets/Livro.jpg";
// import Menu from "../../components/Menu";
import HeaderProfile from "../../assets/headerProfile.jpg";
import {
  ContainerPageProfile,
  ImageHeaderProfile,
  ContainerProfileAndBooks,
  ContainerProfile,
  NameUser,
  ContainerInfosProfile,
  TitleInfoProfile,
  DescriptionInfoProfile,
  ContainerBooksUser,
} from "./styles";

const Profile = () => {
  return (
    <>
      <Header />
      {/* <Menu /> */}
      <ContainerPageProfile>
        <ImageHeaderProfile src={HeaderProfile}></ImageHeaderProfile>
        <ContainerProfileAndBooks>
        <ContainerProfile>
          {/* Infos do user */}
          <NameUser>Arroz</NameUser>
          <ContainerInfosProfile>
            <TitleInfoProfile>Description</TitleInfoProfile>
            {/* Infos do user */}
            <DescriptionInfoProfile>blablablablabla</DescriptionInfoProfile>
          </ContainerInfosProfile>
          <ContainerInfosProfile>
            <TitleInfoProfile>Location</TitleInfoProfile>
            {/* Infos do user */}
            <DescriptionInfoProfile>Porto, Portugal</DescriptionInfoProfile>
          </ContainerInfosProfile>
          <ContainerInfosProfile>
            <TitleInfoProfile>Joined</TitleInfoProfile>
            {/* Infos do user */}
            <DescriptionInfoProfile>June 2018</DescriptionInfoProfile>
          </ContainerInfosProfile>
        </ContainerProfile>
        <ContainerBooksUser>
          <Book image={Livro} />
          <Book image={Livro} />
          <Book image={Livro} />
        </ContainerBooksUser>
        </ContainerProfileAndBooks>
      </ContainerPageProfile>
      <Footer />
    </>
  );
};

export default Profile;
