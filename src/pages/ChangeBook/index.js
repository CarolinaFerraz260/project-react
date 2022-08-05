import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Axios from "axios";
import {
	ContainerBook,
	ContainerInfosBook,
	ContainerImageBook,
	InputChangeImage,
	ContainerInputs,
	InputEditBook,
	ImageBook,
	ContainerButtonSave,
	ButtonSaveBook,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
const ChangeBook = () => {
	const title = useRef();
	const description = useRef();
	const year = useRef();
	const bookCover = useRef();
	const navigate = useNavigate();
	const info = useLocation();
	const book = info.state;
	const token = document.cookie
		.split("; ")
		.map((a) => a.split("="))
		.filter(([a, b]) => a === "token")
		.flat();

	useEffect(() => {
		if (book === null) {
			navigate("../home");
		} else {
			title.current.value = book.title;
			description.current.value = book.description;
			year.current.value = book.year;
			bookCover.current.value = book.book_cover;
		}
	}, []);

	async function updateBook(e) {
		e.preventDefault();
		const updatedBook = {
			title: title.current.value,
			description: description.current.value,
			year: Number(year.current.value),
			book_cover: bookCover.current.value,
		};

		try {
			await Axios.put(`/api/book/${book.id}`, JSON.stringify(updatedBook), {
				headers: {
					"Content-Type": "application/json",
					Authorization: token[1],
				},
			});
			navigate("../profile");
		} catch (err) {}
	}
	return (
		<>
			<Header />
			<ContainerBook>
				<ContainerInfosBook onSubmit={updateBook}>
					<ContainerImageBook>
						<ImageBook src={book !== null ? book.book_cover : null} />
					</ContainerImageBook>
					<ContainerInputs>
						<label>
							<InputChangeImage
								name="imageBook"
								type="text"
								placeholder="Book url"
								id="old_book_url"
								ref={bookCover}
							></InputChangeImage>
						</label>
						<InputEditBook
							placeholder="Book title"
							name="titleBook"
							type="text"
							id="old_book_title"
							ref={title}
						/>
						<InputEditBook
							placeholder="Book description"
							name="descriptionBook"
							type="text"
							id="old_book_description"
							ref={description}
						/>
						<InputEditBook
							placeholder="Book year"
							name="yearBook"
							type="number"
							id="old_book_year"
							ref={year}
						/>
					</ContainerInputs>
					<ContainerButtonSave>
						<ButtonSaveBook>Save</ButtonSaveBook>
					</ContainerButtonSave>
				</ContainerInfosBook>
			</ContainerBook>
			<Footer />
		</>
	);
};

export default ChangeBook;
