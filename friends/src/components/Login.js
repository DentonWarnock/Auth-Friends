import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [errorMsg, setErrorMsg] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => {
        console.log(err.response.data.error);
        setErrorMsg(err.response.data.error);
      });
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
      <h6>{`hint: i<3Lambd4`}</h6>
      <button onClick={handleSubmit}>Login</button>
      <button onClick={resetForm}>Clear</button>
      {errorMsg ? <h3>{errorMsg}</h3> : null}
    </>
  );
}
