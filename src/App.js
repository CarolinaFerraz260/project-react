import Login from "./pages/Login";
import React, { useState } from "react";
/* import Header from "./components/Header";
import Register from "./pages/Register";*/
/* import Search from "./pages/Search"; */
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
      {/* <Search /> */}
      {/*  <Header /> */}
      <Login handleSubmit={handleSubmit} />
      {/*  <Register /> */}
    </>
  );
}

export default App;
