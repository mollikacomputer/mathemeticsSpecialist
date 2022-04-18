import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);
const Register = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleEmailBlur = e =>{
        setEmail(e.target.value);
    }

    const handleUserNameblur = e =>{
        setUsername(e.target.value);
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error)
        })
        console.log(username, password, email);
      }

  return (
    <div className="my-5 py-3 w-50 mx-auto">
      <h2 className="text-primary"> Please Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control onBlur={handleUserNameblur} type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary w-100" type="submit">
          Register
        </Button>
      </Form>
      <br />

      <Link className="text-muted text-decoration-none" style={{cursor:'pointer'}} to="/login">
        Are you Old user? Then You can Log In From here
      </Link>
    </div>
  );
};

export default Register;
