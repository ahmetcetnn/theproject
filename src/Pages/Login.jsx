import React, { useState } from 'react'
import {BsFacebook} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {DiApple} from "react-icons/di"
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from 'firebase/auth'


function Login() {


  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError] =useState(false)


  const handleLogin = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  
  return (
    <div className="general">
  
     
  <form onSubmit={handleLogin}>
        <div className="section">
        <div className="loginn">
            
          <button><FcGoogle/> Google ile devam et</button>
          <button><BsFacebook/> Facebook ile devam et</button>
          <button><DiApple/> Apple ile devam et</button>
          <br></br>
            <input type="e-mail" 
              placeholder='E-posta Adresinizi Girin.' 
              value={email} 
              onChange={e => setEmail(e.target.value)}></input>
            <input type="password" 
              placeholder='Şifrenizi Girin.'
              value={password} 
              onChange={e => setPassword(e.target.value)}></input>
          <button disabled={!email || !password} type="submit"> GİRİŞ YAP</button>
          
          
          
          
          
            {error && <span style={{color:"red"}}>Wrong e-mail or password!</span> } 
          
            <p>Üyeliğin yok mu? <Link to="/register"> Kayıt Ol</Link></p>
      </div>
      </div>
      </form>
      </div>

)}

export default Login
