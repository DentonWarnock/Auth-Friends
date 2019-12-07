import React from "react";

const FriendCard = props => {
  console.log(props);
  return (
    <div className="card">
      <h4>
        {props.friend.name} - {props.friend.age} years old -{" "}
        {props.friend.email}
        {/* <button
          className="deleteBtn"
          onClick={props.deleteFriend(props.friend.id)}
        >
          X
        </button> */}
      </h4>
    </div>
  );
};

export default FriendCard;
