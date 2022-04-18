import React from "react";
import "./Blog.css";
import { Card, Col } from "react-bootstrap";

const Blog = (props) => {
    const {title, description} = props.blog;
  return (
    <div>

        <Card className="m-4">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
          </Card.Body>
        </Card>

    </div>
  );
};

export default Blog;
