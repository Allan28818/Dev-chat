import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Page not found</h1>
      <p>Return to <Link to = "/home">Home</Link></p>
    </>
  )
}

export default NotFound;