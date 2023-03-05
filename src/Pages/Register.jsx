import React, { useState } from 'react'
import {BsFacebook} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {DiApple} from "react-icons/di"
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword   } from "firebase/auth";
import {auth} from "../firebase"


function Register() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError] =useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword  (auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      setError(true)
    });
  }

  return (
    <div className="general">   
  <form onSubmit={handleLogin}>
        <div className="section">
        <div className="loginn">
          
          <br></br>
            <input type="email" 
              placeholder='Enter Your E-Mail.' 
              value={email} 
              onChange={e => setEmail(e.target.value)}></input>
            <input type="password" 
              placeholder='Enter Your Password.'
              value={password} 
              onChange={e => setPassword(e.target.value)}></input>
          <button disabled={!email || !password} type="submit"> Sign Up</button>
          
          
          
          
          
            {error && <span style={{color:"red"}}>Wrong e-mail or password!</span> } 
          
            <p>You have an account? <Link to="/login"> Log In</Link></p>
      </div>
      </div>
      </form>
      </div>

)}

export default Register
