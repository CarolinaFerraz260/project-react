import React from "react";
import { ContainerMenu, Links } from "./styles";

function Menu() {
  return (
    <>
      <ContainerMenu>
        <Links to="/home">Home</Links>
        <Links to="/allBooks">All Books</Links>
        <Links to="/myBooks">My Books</Links>
        <Links to="/favorites">Favorites</Links>
        {/*  <Link to="/login">LOG</Link> */}
      </ContainerMenu>
    </>
  );
}

export default Menu;
