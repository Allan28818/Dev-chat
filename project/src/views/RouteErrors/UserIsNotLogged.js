import React from "react";
import { useHistory } from "react-router";

import "../../styles/mobile/mobileErrorMessages.css";
import "../../styles/web/webErrorMessages.css";

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
      history.push(`/chat/${userData.token}`)
    }, 5000);
    
    document.title = "Usuário logado";
  }
  else {
    setTimeout(function() {
      history.push("/login")
    }, 5000);

    document.title = "Logoff!";
  }
  
  return(
  <>
    <h1
    className = "error-title"
    >{ messages.title }</h1>
    <p
    className = "error-description"
    >{ messages.description }</p>
  </>)
};

export default UserIsNotLogged;