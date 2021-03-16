import React from "react";
import { Link } from "react-router-dom";

const ErrorOcurred = () => {
  return (
    <>
      <h1>Sua rota está incompleta</h1>
      <p>
        Você voltará para <Link to = "/login">{" "}home</Link> em alguns segundos...
      </p>
    </>
  );
}

export default ErrorOcurred;