//Imports
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

//Styles
const NavBar = styled.div`
  background-color: #282c34;
  display: flex;
  position: fixed;
  width: 100%;
  margin-bottom: 10%;
  border-bottom: 5px solid darkorange;
  .imageContainer {
    padding-left: 1%;
    width: 30%;
    display: flex;
    justify-content: flex-start;
    padding-right: 5%;
    img {
      width: 10%;
      border-radius: 50%;
    }
  }
  nav {
    display: flex;
    justify-content: space-between;
    width: 60%;
    a {
      text-decoration: none;
      color: #fff;
      font-size: 1.3em;
      padding: 1%;
      &:hover {
        background-color: darkorange;
        border-top: 4px solid #282c34;
      }
    }
  }
`;
//Component Renduring and Functionality
function Navigation() {
  return (
    <NavBar className="navigation">
      <div className="imageContainer">
        <img src={logo} alt="code zeus logo" />
      </div>
      <nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="/rules">Rules</NavLink>
        <NavLink to="/apply">Apply</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </NavBar>
  );
}
export default Navigation;
