import React, { useEffect, useState } from "react";
import SearchForm from "../../components/SearchFrom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Search() {
    const [tags, setTags] = useState(new Set());
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch(`api/book/?${Array.from(tags).join("&")}`)
            .then(response => response.json())
            .then(json => {
                setData(json.data);
                console.log(tags);
            });
    }, [tags]);


    function inputChange(e, cls) {
        const newArr = new Set(tags);
        const all = e.target.parentElement.parentElement.querySelectorAll(`.${cls}`)
        const checkbox = e.target;
        const isON = checkbox.checked;
        all.forEach(a => {
            a.checked = false;
            newArr.delete(a.value);
        });

        if (isON) checkbox.checked = true;
        (checkbox.checked) ? newArr.add(checkbox.value) : newArr.delete(checkbox.value);
        setTags(newArr);
    }

function Search() {
  const [tags, setTags] = useState(new Set());
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://ancient-temple-61124.herokuapp.com/api/book/?${Array.from(
        tags
      ).join("&")}`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      });
  }, [tags]);

  function inputChange(e, cls) {
    const newArr = new Set(tags);
    const all = e.target.parentElement.parentElement.querySelectorAll(
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

  data.forEach((a) => {
    console.log(a.book_cover);
    console.log(a.description);
    console.log(a.id);
    console.log(a.title);
    console.log(a.user);
    console.log(a.year);
  });
}

  return (
    <>
      <Header />
      <SearchForm inputChange={inputChange} />
      <Footer />
    </>
  );
}

export default Search;
