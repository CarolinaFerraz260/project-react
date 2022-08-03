import React, { useState } from "react";
import Router from './router'

function App() {
  const [token, setToken] = useState();

  async function loginUser(credentials) {
    return fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    const newToken = await loginUser({ email, password });
    setToken(newToken);
    console.log(newToken);
    console.log(token);
  };

  return (
    <>
      <Router handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
