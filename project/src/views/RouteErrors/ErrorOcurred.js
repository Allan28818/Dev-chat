import React from "react";
import { Link } from "react-router-dom";

const ErrorOcurred = () => {
  return (
    <>
      <h1>An error ocurred!</h1>
      <p>
        Get 
        <Link to = "/login">
          {" "}logged
        </Link> or make 
        <Link to = "/sign-up">
        {" "}sign up
        </Link>
      </p>


    </>
  );
}

export default ErrorOcurred;