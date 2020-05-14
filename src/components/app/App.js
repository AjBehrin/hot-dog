import React from 'react';
import './App.css';
import DogCardComponent from '../dogCard/DogCardComponent';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CreateDogCardComponent from '../createDogCard/CreateDogCardComponent';
import NavbarComponent from '../nav/navbarComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="hotdogContainer">
        <Container>
          <NavbarComponent />
        </Container>
        <Container className="flexCard">    
            <DogCardComponent />
            <DogCardComponent />
            <DogCardComponent />
            <DogCardComponent />
            <DogCardComponent />
            <DogCardComponent />
            <DogCardComponent />
            <DogCardComponent />
        </Container>
      </div>
    <Route path="/" exact component={App} />
    </Router>
  );
}

export default App;
