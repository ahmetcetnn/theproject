import React from 'react'
import {AiTwotoneHome} from "react-icons/ai"
import {ImSafari} from "react-icons/im"
import {MdPeople} from "react-icons/md"
import {BiSearchAlt2} from "react-icons/bi"
import {AiTwotoneSetting} from "react-icons/ai"
import {AiOutlineCloud} from "react-icons/ai"
import {RxExit} from "react-icons/rx"
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='menu'>
        
      <ul>
      <p>Menu</p>
       <Link to="/" className='navlink'> <li><AiTwotoneHome/> Home</li></Link>
       <Link to ="/discovery"className='navlink'> <li><ImSafari/> Discovery</li></Link>
        <Link to ="/watchlist" className='navlink'><li><MdPeople/> Watchlist</li></Link>
        <hr></hr>
        <li><AiTwotoneSetting/> Setting</li>
        <li><AiOutlineCloud/> Help</li>
        <li><RxExit/> Exit</li>
        <Link to ="/login" className='navlink'><li>Log In </li></Link> <Link to ="/register" className='navlink'><li> <span>Register</span></li></Link>
        
        
      </ul>
    </div>
  )
}

export default Menu
