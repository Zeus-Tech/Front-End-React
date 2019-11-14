//Imports
import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import {NavLink} from 'react-router-dom';

//Styles
const NavBar = styled.div`
    background-color: #282c34;
    display: flex;
    align-items: center;
    .imageContainer{
        width: 60%;
        display: flex;
        justify-content: flex-start;
        img{
            
        }
    }
    nav{
        display: flex;
        justify-content: space-around;
        width: 40%;
        a{
            text-decoration: none;
            color: #fff;
            font-size: 1.3em;
        }
    }
`;
//Component Renduring and Functionality
function Navigation () {
    return(
        <NavBar>
            <div className="imageContainer">
                <img src={logo} alt=""/>
            </div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>About</NavLink>
                <NavLink to='/'>Login</NavLink>
            </nav>
        </NavBar>
    );
}
export default Navigation;