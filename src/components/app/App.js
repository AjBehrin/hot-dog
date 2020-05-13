import React from 'react';
import './App.css';
import DogCardComponent from '../dogCard/DogCardComponent';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import CreateDogCardComponent from '../createDogCard/CreateDogCardComponent';

function App() {
  return (
    <Container className="flexCard">
      <Jumbotron>
        <DogCardComponent />
        <DogCardComponent />
        <DogCardComponent />
        <DogCardComponent />
        <DogCardComponent />
        <DogCardComponent />
        <DogCardComponent />
        <DogCardComponent />
        <CreateDogCardComponent />
      </Jumbotron>
    </Container>
  );
}

export default App;
