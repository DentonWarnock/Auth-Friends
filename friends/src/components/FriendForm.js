import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendForm = props => {
  const initialState = {
    name: "",
    age: "",
    email: ""
  };
  const [input, setInput] = useState(initialState);

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setInput({ ...input, id: Date.now() }); // doesn't seem to be working... id: friends.length + 1
    axiosWithAuth()
      .post("/friends", input)
      .then(res => {
        console.log("FriendsForm.js, Add new friend, res: ", res);
        props.setFriends(res.data);
        setInput(initialState);
      })
      .catch(err => console.log("FriendsForm.js, add new friend, err: ", err));
  };

  const handleClear = e => {
    e.preventDefault();
    setInput(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new friend</h3>
      <input
        type="text"
        name="name"
        placeholder="Name..."
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age..."
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email..."
        value={input.email}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
      <button onClick={handleClear}>Clear</button>
    </form>
  );
};

export default FriendForm;
