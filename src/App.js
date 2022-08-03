<<<<<<< HEAD
// import Login from "./pages/Login";
// import Search from "./pages/Search";
import Home from "./pages/Home";
import Book from "./components/Book";

=======
import Login from "./pages/Login";
import React, { useState } from "react";
/* import Header from "./components/Header";
import Register from "./pages/Register";*/
/* import Search from "./pages/Search"; */
/* import Footer from "./components/Footer"; */
>>>>>>> 32308a8af30b80d10102769d10069504fcfa96fb
function App() {
  const [token, setToken] = useState();

  async function loginUser(credentials) {
    return fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
  }

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    const newToken = await loginUser({ email, password });
    setToken(newToken);
    console.log(newToken);
    console.log(token);
  }

  return (
    <>
<<<<<<< HEAD
      <Book />
      {/* <Search /> */}
      <Home />
      {/* <Login /> */}
=======
      {/* <Search /> */}
      {/*  <Header /> */}
      <Login handleSubmit={handleSubmit} />
      {/*  <Register /> */}
      {/* <Footer /> */}
>>>>>>> 32308a8af30b80d10102769d10069504fcfa96fb
    </>
  );
}

export default App;
