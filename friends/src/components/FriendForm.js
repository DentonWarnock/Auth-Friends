import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendForm = props => {
  const initialState = {
    name: "",
    age: "",
    email: ""
  };
  const [newFriend, setNewFriend] = useState(initialState);

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewFriend({ ...newFriend, id: Date.now() }); // doesn't seem to be working... id: friends.length + 1
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => {
        console.log("FriendsForm.js, Add new friend, res: ", res);
        props.setFriends(res.data);
        setNewFriend(initialState);
      })
      .catch(err => console.log("FriendsForm.js, add new friend, err: ", err));
  };

  const handleClear = e => {
    e.preventDefault();
    setNewFriend({
      name: "",
      age: "",
      email: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new friend</h3>
      <input
        type="text"
        name="name"
        placeholder="Name..."
        value={newFriend.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age..."
        value={newFriend.age}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email..."
        value={newFriend.email}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
      <button onClick={handleClear}>Clear</button>
    </form>
  );
};

export default FriendForm;
