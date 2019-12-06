import React, { useState } from "react";
import axios from "axios";

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const login = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/");
  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const resetForm = e => {
    e.preventDefault();
    setCredentials({ username: "", password: "" });
  };

  return (
    <form onSubmit={login}>
      <input
        type="text"
        name="username"
        value={CredentialsContainer.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={CredentialsContainer.password}
        onChange={handleChange}
      />
      <button>Login</button>
      <button onClick={resetForm}>Clear</button>
    </form>
  );
}
