import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import {} from "./styles";

const Profile = () => {
  const token = document.cookie.split("; ").map(a => a.split("=")).filter(([a, b]) => a === "token").flat();
  const [userDtata, setUserData] = useState({});
  const [tokenValid, setTokenValid] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`api/user/profile`, {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": token[1]
      })
    })
      .then((response) => {
        if (response.ok) {
          setTokenValid(true);
          return response.json();
        }
        setTokenValid(false);
        throw new Error("No Auth");
      })
      .then((json) => setUserData(json.data))
      .catch(a => console.error(a.message));
  }, []);

  useEffect(() => {
    if (!tokenValid) navigate("../home")
  }, [tokenValid]);


  return (
    <>
      <div><img src={userDtata.profile_picture} /></div>
      <div>{userDtata.email}</div>
      <div>{userDtata.name}</div>
    </>);
}

export default Profile;