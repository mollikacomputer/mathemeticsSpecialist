import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import app from "../../firebase.init";

const auth = getAuth(app);
const Login = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');

  const handleGoogleSignIn = () =>{
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      setUser(user.displayName);
      setEmail(user.email);
      // console.log(user.displayName, user.email);
      
    })
    .catch(error=>{
      console.error(error);
    })
  };
  const handleSignOut = () =>{
    const auth = getAuth();
    signOut(auth)
    .then(()=>{
      setUser({});
    })
    .catch(error => {
      setUser({});
    })
  }
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
         Log in
        </Button>
      </Form>
      <br/>
      {
        user ? <button onClick={handleSignOut} className="btn btn-primary" > SignOut </button>
        :
        <button onClick={handleGoogleSignIn} className="btn btn-primary" > Google Sign In </button>
      }<br/>
      <h2 className="text-primary"> {user} </h2>
      
      {/* <button onClick={handleSignOut} className="btn btn-primary" > SignOut </button> */}
      
    </div>
  );
};

export default Login;
