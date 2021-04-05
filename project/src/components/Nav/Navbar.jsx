import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

import ShortCut from "../../images/shortcut.png"

const Nav = styled.nav`
  width: auto;
  height: 75px;
  border-bottom: 2px solide #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  background: linear-gradient(#ffffff65, #5ef8dee5);
  cursor: default;

 
  #logo-img {
    width: 100px;
    height: 77.187px;        
  }
`;


const Navbar = () => {
  
  return(
    <Nav>
      <div className="logo">
        <img 
        id = "logo-img"
        src = { ShortCut } 
        alt = "DevChat shortcut"
        />
      </div>
      <Burger />
          
    </Nav>
  )
};

export default Navbar;