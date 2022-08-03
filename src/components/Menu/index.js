import React from "react";
import { ContainerMenu } from "./styles";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <p>OLA</p>

      <ContainerMenu>
        <Link to="/home">Home</Link>
        <Link to="/allBooks">All Books</Link>
        <Link to="/myBooks">My Books</Link>
        <Link to="/favorites">Favorites</Link>
      </ContainerMenu>

    </>
  );
}

export default Menu;
