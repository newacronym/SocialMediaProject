import React, { Component } from 'react';
import "./SignUp.css";
import {storage,auth} from "../firebase";
import axios from "axios";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId : "ram@gmail.com",
            name: "shyam",
            userName: "abc",
            password: "root"
         }
    }
    // newSignUp=()=>{
    //     console.log("Sign up clicked!");
    //     console.log(this.state.emailId + this.state.password);
        
    //     auth.createUserWithEmailAndPassword(this.state.emailId, this.state.password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         var user = userCredential.user;
    //     })
    //         let payload = {
    //             "userId": "akshay",
    //             "userName": "ram",
    //             "name": "akjs",
    //             "profileImage": "jksq"
    //         }

    //         const requestOptions ={
    //             method: "POST",
    //             headers: { 'Content-Type': 'application/json' },
    //             body : JSON.stringify(payload),
    //         }

    //         fetch("http://localhost:8080/users",requestOptions)
    //         .then(response => response.json())
    //         .then(data => {
    //             localStorage.setItem("users",JSON.stringify(user));
    //             window.location.reload();
    //         })
    //         .catch(error =>{

    //         })

    //         // ...

    // }

    render() { 
        const handleSubmit = (e) => {
            console.log("Register clicked!");
            e.preventDefault();
            const userData = {
              userId: this.state.emailId,
              name:this.state.name,
              userPassword: this.state.password,
              userName:this.state.userName,
            };
            
            console.log(userData);

            axios.post("http://localhost:8080/users", userData).then((response) => {
              console.log(response.status);
              console.log(response.data.token);
            });
          };
        return ( 
            <div>
                <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email<input type="email" onChange={(event)=>{this.state.emailId=event.currentTarget.value;}}/>
                </label>
                <label htmlFor="username"> UserName <input type="password" onChange={(event)=>{this.state.password=event.currentTarget.value;}}/>
        </label>
        <label htmlFor="password"> Password <input type="password" onChange={(event)=>{this.state.userName=event.currentTarget.value;}}/>
        </label>
        <button onClick={handleSubmit} type="submit">Register</button>
                {/* <input className="logipage__text" onChange={(event)=>{this.state.emailId=event.currentTarget.value;}} type="text" placeholder="Mobile number or Email" />
                <input className="logipage__text" onChange={(event)=>{this.state.name=event.currentTarget.value;}} type="text" placeholder="Full Name" />
                <input className="logipage__text" onChange={(event)=>{this.state.userName=event.currentTarget.value;}} type="text" placeholder="Username" />
                <input className="logipage__text" onChange={(event)=>{this.state.password=event.currentTarget.value;}} type="password" placeholder="Password" />
                <button className="login__button" onClick={this.newSignUp} >Sign up</button> */}
                </form>
            </div>
         );
    }
}
 
export default SignUp;