import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Livro from "../../assets/addbooks.jpg";
import Axios from "axios";
import {
	ContainerBook,
	ContainerInfosBook,
	ContainerImageBook,
	InputChangeImage,
	ContainerInputs,
	InputEditBookDescription,
	InputEditBook,
	ImageBook,
	ContainerButtonAdd,
	ButtonAddBook,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
const AddBook = () => {
	const title = useRef();
	const description = useRef();
	const year = useRef();
	const bookCover = useRef();

	const navigate = useNavigate();
	const token = document.cookie
		.split("; ")
		.map((a) => a.split("="))
		.filter(([a, b]) => a === "token")
		.flat();

	useEffect(() => {
		if (token[1] === "") {
			navigate("../home");
		} else {
			title.current.value = "";
			description.current.value = "";
			year.current.value = "";
			bookCover.current.value = "";
		}
	}, []);

	async function addBook(e) {
		e.preventDefault();
		const newBook = {
			title: title.current.value,
			description: description.current.value,
			year: Number(year.current.value),
		};
		if (bookCover.current.value !== "")
			newBook.book_cover = bookCover.current.value;
		try {
			await Axios.post(`/api/book/`, JSON.stringify(newBook), {
				headers: {
					"Content-Type": "application/json",
					Authorization: token[1],
				},
			});
			navigate("../profile");
		} catch (error) {}
	}
	return (
		<>
			<Header />
			<ContainerBook>
				<ContainerInfosBook onSubmit={addBook}>
					<ContainerImageBook>
						<ImageBook src={Livro} />
					</ContainerImageBook>
					<ContainerInputs>
						<InputChangeImage
							name="imageBook"
							type="text"
							placeholder="book cover url"
							id="add_book_cover"
							ref={bookCover}
						/>
						<InputEditBook
							placeholder="Book title"
							name="titleBook"
							type="text"
							id="add_book_title"
							ref={title}
							required
						/>
						<InputEditBookDescription
							placeholder="Book description"
							name="descriptionBook"
							type="text"
							id="add_book_description"
							ref={description}
							required
						/>
						<InputEditBook
							placeholder="Book year"
							name="yearBook"
							type="number"
							id="add_book_number"
							ref={year}
							required
						/>
					</ContainerInputs>
					<ContainerButtonAdd>
						<ButtonAddBook>Add</ButtonAddBook>
					</ContainerButtonAdd>
				</ContainerInfosBook>
			</ContainerBook>
			<Footer />
		</>
	);
};

export default AddBook;
