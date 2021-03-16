import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = props => {
  const isLogged = JSON.parse(localStorage.getItem("response"));
  alert("Você está logado(a)");
  return isLogged ? <Redirect to = {`/home/${isLogged.token}`} /> : <Route {...props} />
}

export default PublicRoute;