import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1
      className = "error-title"
      >Page not found</h1>
      <p
      className = "error-description"
      >Return to <Link to = "/">Home</Link></p>
    </>
  )
}

export default NotFound;