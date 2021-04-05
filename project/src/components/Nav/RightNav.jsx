import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
      padding: 18px 10px;      
    }

    li > a {
      color: #fff;
      text-decoration: none; 
      font-size: 20px;     
    }

    @media (max-width: 768px) {      
      flex-flow: column;
      background: linear-gradient(#17c0eb, #32ff7e);
      position: fixed;
      z-index: 2;
      transform: ${ ({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      width: 280px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;

      li > a {
        color: #fff;
        font-size: 20px;
      }
    }
`;

const RightNav = ({ open }) => {
  const userData = JSON.parse(localStorage.getItem("response"));
  
  return(
    <Ul open = { open }>
      <li>
        <Link 
        to = "/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
        to = {`/contacts/${userData.token}`} 
        >
          Contatos
        </Link>
      </li>
      <li>
        <Link 
        to = "/add-an-user"
        >
      Adicionar contatos
        </Link>
      </li>

      <li>
      <a 
      href = "https://github.com/Allan28818/Dev-chat"
      target = "_blank"
      rel = "noreferrer"
      >
      GitHub
      </a>
      </li>
      
  </Ul>
  );
}

export default RightNav;