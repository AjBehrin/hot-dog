import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../createDogCard/CreateDogCardComponent.less';

function CreateDogCardComponent() {
    return (
        <div className="dogCardForm">
            <Form>
                <Form.Group controlId="formDogName">
                    <Form.Label>Dog Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Dog Name" />                 
                </Form.Group>

                <Form.Group controlId="formDogDescription">
                    <Form.Label>Dog Description</Form.Label>
                    <Form.Control as="textarea" rows="4" placeholder="Enter Dog Description" />   
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default CreateDogCardComponent;