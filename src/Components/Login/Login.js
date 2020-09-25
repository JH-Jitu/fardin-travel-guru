import React, { useState } from 'react';
import './Login.css'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleFacebookLogin, createUserWithEmailAndPassword, signInWithEmailAndPassword, handleGoogleLogin, resetPassword } from './LoginManager';
import google from './google.png';
import facebook from './fb.png';

function Login() {
  const [newUser, setNewUser] = useState(true);
  
  const [user, setUser] = useState({
    isSignedIn: false, 
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  })

initializeLoginFramework();
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

// Sign-in with google:

const loginWithGoogle = () => {
  handleGoogleLogin()
  .then(res => {
    setUser(res);
    setLoggedInUser(res);
    history.replace(from);
  })
}

// Sign-in with facebook:

  const loginWithFacebook = () => {
    handleFacebookLogin()
    .then(res => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    })
  }

// Sign-In With Email and Password:

  const handleBlur = (e)=>{
    let isFormValid = true;
    if(e.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }     
    if(e.target.name === 'password'){
      const isValidPassword = /\d{1}/.test(e.target.value);
      const passCaseCheck = e.target.value.length > 7;
        isFormValid = isValidPassword && passCaseCheck;
    };
    if(e.target.name === 'passConfirm'){
      if(e.target.value !== loggedInUser.password){
        isFormValid = false;
      }
      else{isFormValid = true};
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }   
  }
  
  const handleLogin = (e)=>{

    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
      .catch(error => {
        handleResponse(error, true)
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);       
      })
      .catch(error => {
        handleResponse(error, true)
      })
    }
    e.preventDefault();
  }

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if(!res.error) {
      redirect = true;
      history.replace(from);
    }
  }

  return (
    <div style={{textAlign: "center"}}>
      <h2 className="text-white">Login to explore more!</h2>
      <button className="btn btn-warning" onClick={() => setNewUser(!newUser)} name="newUser" id="">I have an account</button>
      <br/> <br/>

      <div className="container bg-dark" style={{padding: "30px", width: "500px"}} >
      <form>

      
                    {newUser && <input className="form-control" type="text" name= "name" onBlur={handleBlur} required placeholder="Name"/>}
                    <br/>
                    <input className="form-control" type="text" name="email" placeholder="Email" required onBlur={handleBlur}/>
                    <br/> 
                    <input className="form-control" type="password" name="password" placeholder="Password" required onBlur={handleBlur}/>
                    <br/> 
                    {newUser && <input className="form-control" required type="password" name= "passConfirm" onBlur={handleBlur} placeholder="Confirm password"/>}
                    <br/>
                    <button onClick={handleLogin}  type="submit" className="btn btn-primary"> {newUser? "Sign up": "Sign in"}</button>        
      
      </form>
      </div> 
       <br/>
      {user.error? <p style={{backgroundColor: "white"}}> {user.error} <br/> <small> Please type you Email and Password again!</small> </p> : ""}
<br/>
    <button style={{width: "500px"}} className="btn btn-secondary" onClick={() => resetPassword(user.email)}> Reset Password</button> <br/> <br/>
    <button style={{width: "500px"}} className="btn btn-light" onClick={loginWithFacebook}> <img style={{width: "22px"}} src={facebook} alt=""/> Sign in with Facebook Account</button><br/> <br/>
    <button style={{width: "500px"}} className="btn btn-light" onClick={loginWithGoogle}><img style={{width: "20px"}} src={google} alt=""/> Sign in with Google Account</button>
    
    </div>
  );
}

export default Login;
