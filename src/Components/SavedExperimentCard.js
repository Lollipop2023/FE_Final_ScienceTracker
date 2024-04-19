import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function SavedExperimentCard({ experiment }) {
  return (
    <Card style={{ width: '18rem', backgroundColor: '.card', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{experiment.title}</Card.Title>
        <Card.Text>{experiment.details}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{experiment.difficulty}</ListGroup.Item>
        <ListGroup.Item>{experiment.category}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Start</Card.Link>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default SavedExperimentCard;
