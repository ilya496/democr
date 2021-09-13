import React from "react";
import heartImg from "../../assets/images/heart.png";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="container error-container">
      <img src={heartImg} alt="Broken heart" className="heart" />
      <p className="greeting">We are sorry, but</p>
      <p className="greeting">This page does not exist ;(</p>
      <p className="error-info">
        Go back to the{" "}
        <Link to="/" className="account-link">
          home page
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage;
