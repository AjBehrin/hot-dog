import React from 'react';
import Container from 'react-bootstrap/Container';
import DogListComponent from '../dogList/DogListComponent';
import CreateDogCardComponent from '../createDogCard/CreateDogCardComponent';
import DogDetailsComponent from '../dogDetails/DogDetailsComponent';
import HomePageMainComponent from '../home/HomePageMainComponent';
import { Route, Switch } from 'react-router-dom';

function HomePageComponent() {
    return (
        <main>
            <Container className="flexCard">
                <Switch>
                    <Route exact path='/' component={HomePageMainComponent} />
                    <Route path='/dogs' component={DogListComponent} />
                    <Route path='/addDog' component={CreateDogCardComponent} />
                    <Route path='/dogDetails/:number' component={DogDetailsComponent} />
                </Switch>
            </Container>
        </main>
    )
}

export default HomePageComponent;