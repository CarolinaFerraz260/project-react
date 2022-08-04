import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Livro from "../../assets/Livro.jpg";
import {
  ContainerProfile,
  ContainerInfosUser,
  InputChangeImage,
  ContainerInputs,
  InputEditProfile,
  ContainerImageUser,
  ImageUser,
  ContainerButtonSave,
  ButtonSaveProfile,
} from "./styles";

const ChangeBook = () => {
  return (
    <>
      <Header />
      <ContainerProfile>
        <ContainerInfosUser>
          <ContainerImageUser>
            <ImageUser src={Livro} />
          </ContainerImageUser>
          <ContainerInputs>
            <label>
              Choose
              <InputChangeImage name="imageBook" type="text"></InputChangeImage>
            </label>
            <InputEditProfile
              placeholder="Book title"
              name="titleBook"
              type="text"
            />
            <InputEditProfile
              placeholder="Book description"
              name="descriptionBook"
              type="text"
            />
            <InputEditProfile
              placeholder="Book year"
              name="yearBook"
              type="password"
            />
          </ContainerInputs>
        </ContainerInfosUser>
      </ContainerProfile>
      <ContainerButtonSave>
        <ButtonSaveProfile>Save</ButtonSaveProfile>
      </ContainerButtonSave>
      <Footer />
    </>
  );
};

export default ChangeBook;
