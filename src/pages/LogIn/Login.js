import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import Header from "../../Shared/Header/Header";


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
      <Header user={user} ></Header>
    })
    .catch(error=>{
      console.error(error);
    })
  };
  // After Signout page is Blank need to redirect homepage
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
      <Form >
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
        user ? <button onClick={handleSignOut} className="btn btn-primary" > 
        <Link className="text-white text-decoration-none" to='/' >SignOut </Link>
         </button>
        :
        <button onClick={handleGoogleSignIn} className="btn btn-primary" > Sign In </button>
      }<br/>
      <h2 className="text-primary">
        User Name: {user}
         </h2>
      <Link className="text-muted text-decoration-none" style={{cursor:'pointer'}} to="/register">
        Are you New user? Then You can <span className="text-primary" > Register</span>  From here
      </Link>
    </div>
  );
};

export default Login;
