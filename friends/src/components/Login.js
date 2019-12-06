import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const resetForm = e => {
    e.preventDefault();
    setCredentials({ username: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={CredentialsContainer.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={CredentialsContainer.password}
        onChange={handleChange}
      />
      <button>Login</button>
      <button onClick={resetForm}>Clear</button>
    </form>
  );
}
