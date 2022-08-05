import React, { useEffect, useState } from "react";
import { ContainerBooksFilter } from "./styles";
import SearchForm from "../../components/SearchFrom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
function Search() {
	const navigate = useNavigate();
	const [tags, setTags] = useState(new Set());
	const [data, setData] = useState([]);

	useEffect(() => {
		Axios.get(`/api/book/?${Array.from(tags).join("&")}`).then((json) => {
			setData(json.data.data);
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
	function showInfo(book) {
		navigate("../booksbysearch", { state: book });
	}

	return (
		<>
			<Header />
			<SearchForm inputChange={inputChange} />
			<ContainerBooksFilter>
				{data.map((book, index) => (
					<Book
						image={book.book_cover}
						title={book.title}
						key={index}
						showInfo={() => showInfo(book)}
					/>
				))}
			</ContainerBooksFilter>
			<Footer />
		</>
	);
}

export default Search;
