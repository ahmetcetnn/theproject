import React from 'react'
import {BsFacebook} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {DiApple} from "react-icons/di"
import { Link } from 'react-router-dom'

function Register() {


  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <div className='general' >
     
     <form onSubmit={handleLogin}>
        <div className='section'>
      <div className='loginn'>
        
      <button><FcGoogle/> Google ile devam et</button>
      <button><BsFacebook/> Facebook ile devam et</button>
      <button><DiApple/> Apple ile devam et</button>

      <br></br>
      <input type="e-mail" placeholder='E-posta Adresinizi Girin.'></input>
      <input type="password" placeholder='Şifrenizi Girin.'></input>
      <button > E-posta ile Kayıt Ol</button>
      
     
        <p>Zaten kaydoldun mu? <Link to="/login">Giriş Yap</Link></p>
      
      </div>
      </div>
      </form>
    </div>
  )
}

export default Register
