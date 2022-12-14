import { useNavigate } from "react-router-dom";
import {
  ContainerLinks,
  Logo,
  ProfileIcon,
  SearchIcon,
  Row,
  ContainerMenu,
  LinkHome,
  ButtonLogout,
  ButtonLogin,
} from "./styles";
import profile from "../../assets/profile.svg";
import search from "../../assets/search.svg";
import potato from "../../assets/beautifulpotato.png";

function Header() {
  const navigate = useNavigate();
  function logout() {
    document.cookie = "token=";
    navigate("../login");
  }
  function login() {
    document.cookie = "token=";
    navigate("../login");
  }
  return (
    <>
      <header>
        <ContainerLinks>
          <LinkHome title="Home Page" to="/">
            <Logo src={potato} alt="logo" />
          </LinkHome>
          <ContainerMenu>
            <a title="Search" href="/search">
              <SearchIcon src={search} alt="Search icon" />
            </a>
            <a title="Your Profile" href="/profile">
              <ProfileIcon src={profile} alt="Profile icon" />
            </a>
            <ButtonLogout onClick={logout}>Logout</ButtonLogout>
            <ButtonLogin onClick={login}>Login</ButtonLogin>
          </ContainerMenu>
        </ContainerLinks>
      </header>
      <Row />
    </>
  );
}

export default Header;
