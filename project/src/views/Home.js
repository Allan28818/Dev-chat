import React from "react";
import Navbar from "../components/Nav/Navbar";

import "../styles/mobile/mobileHome.css";
import "../styles/web/webHome.css";
import Logo from "../images/principal-logo.png";

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
      
      <img 
      src = { Logo }
      alt = "DevChat"
      className = "home-logo" />
      
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