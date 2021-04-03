import React from "react";
import Navbar from "../components/Nav/Navbar";

import "../styles/web/webHome.css";
import "../styles/mobile/mobileHome.css";

const Home = () => {
  const clearStorage = () => {
    alert("Você não está mais logado(a)");
    localStorage.clear();
    window.location.reload();
  }


  document.title = "DevChat | Home";

  return (
    <>
      <Navbar />
      <h1
        className = "home-title"
      >
        Dev chat
      </h1>
      <p
        className = "home-description">
        Converse com seus amigos e compartilhe todas as suas expriências!
      </p>

      <button
        className = "logoff"
        onClick = { clearStorage }
      >Log-off</button>
    </>
  );
}

export default Home;