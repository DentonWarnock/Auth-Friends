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
        console.log("Friends GET RQ res: ", res);
        setFriends(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Friends GET err: ", err);
      });
  }, []);

  const deleteFriend = id => {
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then(res => {
        console.log("Friends DELETE RQ res: ", res);
        setFriends(res.data);
      })
      .catch(err => console.log("Friends DELETE err: ", err));
  };

  if (loading) {
    return <img src={Spinner} alt="Loading Spinner" />;
  }

  console.log(friends);
  return (
    <>
      <FriendForm setFriends={setFriends} />
      <h2>Friends List : </h2>
      <div className="friends-list">
        {!loading && friends !== undefined ? (
          friends.map(friend => (
            <FriendCard
              key={friend.id}
              friend={friend}
              deleteFriend={deleteFriend}
            />
          ))
        ) : (
          <h3>Add some friends</h3>
        )}
      </div>
    </>
  );
};

export default Friends;
