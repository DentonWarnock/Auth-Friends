import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Spinner from "../img/Spinner.gif";
import FriendCard from "./FriendCard";
import FriendForm from "./FriendForm";

const Friends = props => {
  const [friends, setFriends] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("Friends res: ", res);
        setFriends(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Friends err: ", err);
      });
  }, []);

  if (loading) {
    return <img src={Spinner} alt="Loading Spinner" />;
  }

  const handleAdd = newFriend => {
    setFriends();
  };
  console.log(friends);
  return (
    <>
      <FriendForm />
      <h2>Friends List : </h2>
      <div className="friends-list">
        {!loading && friends !== undefined ? (
          friends.map(friend => <FriendCard key={friend.id} friend={friend} />)
        ) : (
          <h3>Add some friends</h3>
        )}
      </div>
    </>
  );
};

export default Friends;
