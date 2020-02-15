import React from "react";
import Navigation from "./components/navigation";
import Contact from "./components/pages/contact";
import { Route } from "react-router-dom";
import Home from "./components/pages/home";

import header from "./images/header.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <img className="banner" src={header} alt="website banner" />
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <footer>
        <p>© code-zeus Rusty Olympus 2020</p>
      </footer>
    </div>
  );
}

export default App;
