import React from "react"
import { Redirect, Route } from "react-router";

const PrivateRoute = props => {
  const isLogged = !!localStorage.getItem("response");

  return isLogged ? <Route {...props} /> : <Redirect to = "/user-is-not-logged" />;
}

export default PrivateRoute;

