import React from "react";

const FriendCard = props => {
  console.log(props);
  return (
    <div className="card">
      <h4>
        {props.friend.name} - {props.friend.age} years old -{" "}
        {props.friend.email}
      </h4>
    </div>
  );
};

export default FriendCard;
