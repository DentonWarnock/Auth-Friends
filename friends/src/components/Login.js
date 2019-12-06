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
    <>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit}>Login</button>
      <button onClick={resetForm}>Clear</button>
    </>
  );
}
