import React from "react";

const FriendCard = props => {
  console.log(props);
  return (
    <div className="card">
      <h4>
        {props.friend.name} - {props.friend.age} years old -{" "}
        {props.friend.email}
      </h4>
      <div
        className="deleteBtn"
        onClick={() => props.deleteFriend(props.friend.id)}
      >
        X
      </div>
    </div>
  );
};

export default FriendCard;
