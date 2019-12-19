import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div `
    text-align: center;
    font-size: 1.2rem;
    .imgContainer {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        .imgBox img{
            width: 70%;
            border: 2px solid #282c34;
        }
        p{
            width: 100%;
            margin: 5% 0;

        }
        .links{
            display: flex;
            text-align: center;
            justify-content: space-between;
            width: 100%;
            img{
                height: 40px;
            }
            a{
                margin-left: 5%;
            }
    }
`

export default function Home() {
    return (
        <Container>
            <h1>Welcome to Code Zeus</h1>
            <div className="imgContainer">
                <div className="pBox">
                    <p>
                        My name is Jesuz Contreras and I am<br/>
                        a Fullstack Web Developer. I'm from Kentucky.<br/>
                        I love learning and challenging myself to dig<br/>
                        deep and learn as much as I can. Coding for <br/>
                        me is my way to express my creativity.
                    </p>
                    <div className="links">
                        <Link to="/contact"><img src="https://img.icons8.com/office/40/000000/email.png" alt='email icon' /></Link>
                        <a rel='noopener noreferrer' href='https://github.com/jesuzContreras' target='_blank'><img src="https://img.icons8.com/nolan/45/000000/github.png" alt="Github" /></a>
                        <a rel='noopener noreferrer' href="https://www.linkedin.com/in/jesuz-contreras-128389194/" target='_blank'><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Linked In" /></a>
                    </div>
                </div>
            </div>
        </Container>
    )
}
