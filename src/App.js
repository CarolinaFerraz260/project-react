import React from "react";
import Router from './router'

function App() {
  /*   const storedJwt = localStorage.getItem('token');
    const [token, setToken] = useState(storedJwt || null); */

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
    const newToken = await loginUser({ email, password })
      .then(data => {
        if (data.status) {
          return data.data.token;
        }
        return "";
      });
    document.cookie = `token=${newToken}`
    /*     localStorage.setItem('token', newToken);
        setToken(newToken); */
  };

  return (
    <>
      {/* <Login handleSubmit={handleSubmit} /> */}
      <Router handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
