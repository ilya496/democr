import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/UserList.css";

function UserList({ users }) {
  const userCountToShow = 6;
  const [limit, setLimit] = useState(userCountToShow);
  const [offset, setOffset] = useState(0);

  const userFromStore = useSelector((state) => state.user);

  if (userFromStore && userFromStore.data) {
    users.sort((x, y) => {
      return x._id === userFromStore.data.id
        ? -1
        : y._id === userFromStore.data.id
        ? 1
        : 0;
    });
  }

  const slicedUsers = users.slice(offset, limit);

  const showNext = () => {
    setOffset(limit);
    setLimit(limit + userCountToShow);
  };

  const showPrevious = () => {
    setLimit(offset);
    setOffset(offset - userCountToShow);
  };

  const generatePreviousPhrase = () =>
    `Previous ${slicedUsers.length - limit === 0 ? 0 : userCountToShow} Users`;

  const generateNextPhrase = () => {
    const amount = Math.max(Math.min(users.length - limit, userCountToShow), 0);
    const phrase = amount === 1 ? "Next 1 User" : `Next ${amount} Users`;
    return phrase;
  };
  if (users && users.length > 0) {
    return (
      <>
        <ul className="users-list">
          {slicedUsers.map((user, key) => (
            <li className="user-list-item" key={key}>
              <span className="username">
                {user.username === userFromStore?.data?.username
                  ? "you are"
                  : user.username + " is"}
              </span>
              <span className="user-status">
                {user.isOnline ? "online" : "offline"}
              </span>
              <i
                className={`fas fa-toggle-${user.isOnline ? "on" : "off"}`}
              ></i>
            </li>
          ))}
        </ul>
        <button
          className="show-btn sm danger"
          onClick={showPrevious}
          disabled={offset < userCountToShow}
        >
          {generatePreviousPhrase()}
        </button>
        <button
          className="show-btn sm success"
          onClick={showNext}
          disabled={offset + userCountToShow >= users.length}
        >
          {generateNextPhrase()}
        </button>
      </>
    );
  } else {
    return <div className="title">There are no Users</div>;
  }
}

export default UserList;
