import React, { useState } from 'react'
import {BsFacebook} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {DiApple} from "react-icons/di"
import { Link } from 'react-router-dom'
function Login() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError] =useState(true)


  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <div className="general">
  
     

        <div className="section">
        <div className="login">
            <form onSubmit={handleLogin}>
          <button><FcGoogle/> Google ile devam et</button>
          <button><BsFacebook/> Facebook ile devam et</button>
          <button><DiApple/> Apple ile devam et</button>
          <br></br>
          <input type="e-mail" placeholder='E-posta Adresinizi Girin.' value={email} onChange={e => setEmail(e.target.value)}></input>
          <input type="password" placeholder='Şifrenizi Girin.'value={password} onChange={e => setPassword(e.target.value)}></input>
          <button disabled={!email || !password} type="submit"> GİRİŞ YAP</button>
          </form>
          
          
          
          
            {error && <span style={{color:"red"}}>Wrong e-mail or password!</span> } 
          <p>Google, Apple, veya e-posta ile devam ederek Yekflix'in Hizmet Kullanım Şartlarını 
            ve <span>Gizlilik Politikasısnı </span> kabul etmiş olursun.</p>
            <p>Üyeliğin yok mu? <Link to="/register"> Kayıt Ol</Link></p>
      </div>
      </div>
      </div>

)}

export default Login
