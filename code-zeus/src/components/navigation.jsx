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
    position: fixed;
    width: 100%;
    margin-bottom: 10%;
    .imageContainer{
        width: 60%;
        display: flex;
        justify-content: flex-start;
        img{
            width: 30%;
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
            padding: 2%;
            &:hover{
                outline: 2px solid yellow;
            }
        }
    }
`;
//Component Renduring and Functionality
function Navigation () {
    return(
        <NavBar className='navigation'>
            <div className="imageContainer">
                <img src={logo} alt="code zeus logo"/>
            </div>
            <nav>
                <NavLink to=''>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </NavBar>
    );
}
export default Navigation;