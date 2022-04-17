import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        
          <Link to='./booknow' > 
          <Button  variant="primary">Book Now</Button> </Link> 
      </Card.Body>
    </Card>
  );
};

export default Service;
