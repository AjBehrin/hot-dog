import React from 'react';
import ellie from '../../images/Ellie_Pic.jpg';
import './DogCardComponent.css';

function DogCardComponent() {
  return (
    <div className="dogCard dogFlex">
        <img src={ellie} alt="Derpy Dog"/>
        <h1>Ellie</h1>
        <p className="dogInfo">She's a dog</p>
        <p>Here's some info on that darn dog</p>
        <button>More Information</button>
    </div>
  );
}

export default DogCardComponent;
