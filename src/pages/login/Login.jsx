import "./login.css";
import axios from "axios";
import { useState } from "react";
import {BrowserRouter as Router ,Link,useNavigate} from 'react-router-dom';


export default function Login() {

const [userName,setUserName]=useState("");
const [password,setPassword]=useState("");
const [isLoggedIn,setIsLoggedIn]=useState(false);

const navigate = useNavigate();

const handleLogin=()=>{
  axios.get('http://localhost:8080/users/auth/'+userName+'/'+password)
  .then(function(response){
    console.log(response.data);

    // setTimeout(()=>{
    //   setIsLoggedIn(response.data);
    // },2000);

    setIsLoggedIn(response.data);
  })  

  if(isLoggedIn==true){

    // console.log('Redirecting..')
    // return <Redirect to='/home' />
    navigate("/home", { replace: true });
  }
  else{
    alert ("Wrong login Details, Enter again");  
  }
}

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ChatBook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on ChatBook.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="UserName" className="loginInput" onChange={(event)=>{setUserName(event.currentTarget.value);}} />
            <input placeholder="Password" className="loginInput" onChange={(event)=>{setPassword(event.currentTarget.value);}}/>
            <button className="loginButton" onClick={handleLogin}>Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            
            <Link to="/register"><button className="loginRegisterButton">
              Create a New Account
            </button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
