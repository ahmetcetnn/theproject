import React, { useState } from 'react'
import yekflix from "../images/yekflix.png"
import { Link } from 'react-router-dom'
import {BiSearchAlt2} from "react-icons/bi"
function Navbar() {
  const [searchKey, setSearchKey] =useState("")

  const searchMovie = (e) => {
  e.preventDefault()
  }


  return (
    <div className='navbarüst'>
        
        <div><img src={yekflix} alt="logo"/></div>
        
        
        
        <div className='navbar'>
        <li>
            <ul>Home</ul>
            <ul>Series</ul>
            <ul>Tv Show</ul>  
        </li>

        <form onSubmit={searchMovie}>
        <div className='search'>
            <input type="text"
              placeholder='Search Movie'
              className='searchbar' 
              onChange={searchKey}/>
              <button type='submit'
              id='submitbtn'>Search 
              <BiSearchAlt2 style={{marginBottom:"5px"}}/>
              </button>
            </div>
        </form>
        <div className='logreg'>  
        <Link to ="/login" id='item1' className='navlink'><li>Log In </li></Link> | <Link to ="/register" id='item2' className='navlink'><li> <span>Register</span></li></Link> 
        </div>
       
       
        </div>
        
   
        
   
    </div>
    
  )
}

export default Navbar
