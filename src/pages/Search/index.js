import React, { useEffect, useState } from "react";
import { ContainerBooksFilter } from "./styles";
import SearchForm from "../../components/SearchFrom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
function Search() {
  const [tags, setTags] = useState(new Set());
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/book/?${Array.from(tags).join("&")}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
  }, [tags]);

  function inputChange(e, cls) {
    const newArr = new Set(tags);
    const all =
      e.target.parentElement.parentElement.parentElement.querySelectorAll(
        `.${cls}`
      );
    const checkbox = e.target;
    const isON = checkbox.checked;
    all.forEach((a) => {
      a.checked = false;
      newArr.delete(a.value);
    });

    if (isON) checkbox.checked = true;
    checkbox.checked
      ? newArr.add(checkbox.value)
      : newArr.delete(checkbox.value);
    setTags(newArr);
  }

  return (
    <>
      <Header />
      <SearchForm inputChange={inputChange} />
      <ContainerBooksFilter>
        {data.map((book, index) => (
          <Book image={book.book_cover} key={index} />
        ))}
      </ContainerBooksFilter>
      <Footer />
    </>
  );
}

export default Search;
