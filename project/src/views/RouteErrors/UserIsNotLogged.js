import React, { useState } from "react";
import { useHistory } from "react-router";


const UserIsNotLogged = () => {
  const history = useHistory();
  const isLogged = !!localStorage.getItem("response");
  const userData = JSON.parse(localStorage.getItem("response"));

  var messages = {
    title: "Você não está logado(a) ⛵",
    description: "Você será redirecionado(a) para a página de login em 5 segundos"
  }

  if(isLogged) 
  {
    messages.title = "Você está logado(a) 🤔"
    messages.description = "Você está logado(a) você retornará para home em 5 segundos";
    setTimeout(function() {
      history.push(`/home/${userData.token}`)
    }, 5000);
  }
  else {
    setTimeout(function() {
      history.push("/login")
    }, 5000);
  }
  
  return(
  <>
    <h1>{ messages.title }</h1>
    <p>{ messages.description }</p>
  </>)
};

export default UserIsNotLogged;