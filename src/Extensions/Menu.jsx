import React from 'react'
import {AiTwotoneHome} from "react-icons/ai"
import {ImSafari} from "react-icons/im"
import {MdPeople} from "react-icons/md"
import {BiSearchAlt2} from "react-icons/bi"
import {AiTwotoneSetting} from "react-icons/ai"
import {AiOutlineCloud} from "react-icons/ai"
import {RxExit} from "react-icons/rx"


function Menu() {
  return (
    <div className='menu'>
        
      <ul>
      <p>Menu</p>
        <li><AiTwotoneHome/> Home</li>
        <li><ImSafari/> Discovery</li>
        <li><MdPeople/> Watchlist</li>
        <li><BiSearchAlt2/> Search</li>
        <hr></hr>
        <li><AiTwotoneSetting/> Setting</li>
        <li><AiOutlineCloud/> Help</li>
        <li><RxExit/> Exit</li>
        <li><span>Log In</span>  | <span>Register</span></li>
        
      </ul>
    </div>
  )
}

export default Menu
