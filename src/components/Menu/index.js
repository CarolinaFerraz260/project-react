import React from "react";
import { ContainerMenu } from "./styles";
// import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <p>OLA</p>

      <ContainerMenu>
        <link to="/login">Home</link>
        {/* <Link to="/allBooks">All Books</Link>
        <Link to="/myBooks">My Books</Link>
        <Link to="/favorites">Favorites</Link> */}
      </ContainerMenu>
    </>
  );
}

export default Menu;
