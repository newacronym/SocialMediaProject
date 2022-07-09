import "./register.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [userName, setUserName]=useState("");
    const [Name, setName]=useState("");

    const handleSubmit = (e) => {
      console.log("Register clicked!");
      e.preventDefault();
      const userData = {
        name:Name,
        userId:email,
        userName:userName,
        userPassword:password,
      };
      
      console.log(userData);
  
      axios.post("http://localhost:8080/users", userData).then((response) => {
        console.log(response.status);
        console.log(response.data.token);
      });
    };

  return (

  

  

    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Enter your name" className="loginInput" onChange={(event)=>{setName(event.currentTarget.value);}}/>
            <input placeholder="Username" className="loginInput" onChange={(event)=>{setUserName(event.currentTarget.value);}}/>
            <input placeholder="Email" className="loginInput" onChange={(event)=>{setEmail(event.currentTarget.value);}}/>
            <input placeholder="Password" className="loginInput" onChange={(event)=>{setPassword(event.currentTarget.value);}}/>
            <button className="loginButton" onClick={handleSubmit}>Sign Up</button>
            {/* <button className="loginButton">Sign Up</button> */}

            <Link to="/login"><button className="loginRegisterButton">
              Log into Account
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
