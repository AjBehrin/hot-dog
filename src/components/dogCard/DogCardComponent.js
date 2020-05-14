import React from 'react';
import ellie from '../../images/Ellie_Pic.jpg';
import './DogCardComponent.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function DogCardComponent() {
  return (
    <div className="dogCard dogFlex">
        <Card>
          <Card.Header as="h4" className="cardHeader">Ellie</Card.Header>
          <Card.Img variant="top" src={ellie} />
          <Card.Body>
            <Card.Title className="drinkTitle">Ellies Drink: Bee's Knees</Card.Title>
            <Card.Text className="dogInfo">
              Here's some info on this gosh darn diggity dog
            </Card.Text>
            <Button variant="primary">More Information</Button>
          </Card.Body>
        </Card>
    </div>


  );
}

export default DogCardComponent;
