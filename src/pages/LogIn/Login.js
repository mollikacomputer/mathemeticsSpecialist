import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className='my-5 py-3 w-50 mx-auto'>
      <h2 className="text-primary" > Please Log in</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary w-100" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
