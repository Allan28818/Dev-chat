import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: auto;
  height: 65px;
  border-bottom: 2px solide #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  background: linear-gradient(#ffffff65, #5ef8dee5);
  cursor: default;

  .logo {
    padding: 15px 0;
  }
`;


const Navbar = () => {
  
  return(
    <Nav>
      <div className="logo">
        Menu
      </div>
      <Burger />
          
    </Nav>
  )
};

export default Navbar;