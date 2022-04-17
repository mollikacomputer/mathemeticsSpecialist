import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Service.css";
const Service = (props) => {
  const { title, price, description, picture } = props.service;
  return (
    <Card className="my-5" style={{ width: "22rem" }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title> Honorable Amount {price} </Card.Title>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary"> Book Now </Button>
      </Card.Body>
    </Card>
  );
};

export default Service;
