import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const userData = JSON.parse(localStorage.getItem("response"));
  const clearStorage = () => {
    alert("Você não está mais logado(a)");
    localStorage.clear();
    window.location.reload();
  }
  return(
    <>
      <h1>Home</h1>
      <p>Converse com seus amigos e compartilhe todas as suas expriências!</p>
      <Link to = {`/home/${userData.token}`} >Contatos</Link>
      <Link to = "/add-an-user">Adicionar contatos</Link>
      <a 
      href = "https://github.com/Allan28818/Dev-chat"
      target = "_blank"
      >
      GitHub
      </a>
      <button
      onClick = { clearStorage }
      >Log-off</button>
    </>
  );
}

export default Home;