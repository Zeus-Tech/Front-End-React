import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  font-size: 1.2rem;
  .imgContainer {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    .imgBox img {
      width: 70%;
      border: 2px solid #282c34;
    }
    p {
      width: 100%;
      margin: 5% 0;
    }
  }
`;

export default function Home() {
  return (
    <Container>
      <h1>Welcome to Rust Olympus official Website!</h1>
      <div className="imgContainer">
        <div className="content">
          <p>
            This website is under construction and everything for right now is
            on our discord. Click connect to join us!
          </p>
          <iframe
            src="https://discordapp.com/widget?id=676197418194436107&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameborder="0"
          />
        </div>
      </div>
    </Container>
  );
}
