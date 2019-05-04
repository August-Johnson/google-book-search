import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Container>
            <Jumbotron className={"jumbotron text-center"} >
              <h1>(React) Google Books Search</h1>
              <h4>Search for and Save Books of Interest</h4>
            </Jumbotron>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
