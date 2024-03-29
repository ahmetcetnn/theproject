import React, { useContext, useState } from 'react'
import {BsFacebook} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {DiApple} from "react-icons/di"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../firebase"
import { AuthContext } from '../Context/AuthContext'


function Login() {
  

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError] =useState(false)
  const [showPopup, setShowPopup] = useState(false);
  
  const navigate =useNavigate()
  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword (auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch({type:"LOGIN", payload:user})
      setShowPopup(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
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
          <button disabled={!email || !password} type="submit" > Log In</button>
          
          
          
          
          
            {error && <span style={{color:"red"}}>Wrong e-mail or password!</span> } 
          
            <p >Dont you have an account? <Link to="/register"> Sign Up</Link></p>
      </div>
      </div>
      </form>
      {showPopup && <p style={{textAlign:"center"}}>Giriş işlemi başarılı, ana sayfaya yönlendiriliyorsunuz...</p>}
      </div>

)}

export default Login
