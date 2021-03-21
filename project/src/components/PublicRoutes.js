import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = props => {
  const isLogged = JSON.parse(localStorage.getItem("response"));
  return isLogged ? <Redirect to = {`/home/${isLogged.token}`} /> : <Route {...props} />
}

export default PublicRoute;