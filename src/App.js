// import Login from "./pages/Login";
import React from "react";
<<<<<<< HEAD
import Profile from "./pages/Profile";
=======
// import Router from "./router";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
/* import Profile from "./pages/Profile"; */
>>>>>>> 5b9d31328edac54364dd10a7f643f518c4034a1d
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
<<<<<<< HEAD
      <Profile />
=======
      {/* <Router /> */}
      {/* <Home /> */}
      {/* <Search /> */}
      {/*  <Header /> */}
      {/* <Profile /> */}
>>>>>>> 5b9d31328edac54364dd10a7f643f518c4034a1d
      {/* <Login handleSubmit={handleSubmit} /> */}
      <Router handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
