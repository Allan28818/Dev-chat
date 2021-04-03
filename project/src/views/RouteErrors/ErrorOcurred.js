import React from "react";
import { Link, useHistory } from "react-router-dom";

const ErrorOcurred = () => {

  const history = useHistory();
  setTimeout(() => {
    history.push("/")
  }, 4000);

  document.title = "Route incomplete";

  return (
    <>
      <h1
      className = "error-title"
      >Sua rota está incompleta</h1>
      <p
      className = "error-description">
        Você voltará para <Link to = "/">{" "}Home</Link> em alguns segundos...
      </p>
    </>
  );
}

export default ErrorOcurred;