import React from 'react'
import {AiTwotoneHome} from "react-icons/ai"
import {ImSafari} from "react-icons/im"
import {MdPeople} from "react-icons/md"
import {AiOutlineCloud} from "react-icons/ai"
import {RxExit} from "react-icons/rx"
import { Link,useNavigate } from 'react-router-dom'

function Menu() {
  const navigate =useNavigate()

  const handleExit = () => {
    
    localStorage.removeItem('user');
   
    navigate('/login');}


  return (
    <div className='menu'>
        
      <ul>
      <p>Menu</p>
       <Link to="/" className='navlink'> <li><AiTwotoneHome/> Home</li></Link>
       <hr></hr>
       <Link to ="/discovery"className='navlink'> <li><ImSafari/> Discovery</li></Link>
       <hr></hr>
        <Link to ="/watchlist" className='navlink'><li><MdPeople/> Watchlist</li></Link>
        <hr></hr>
       {/* <Link to="/comments" className='navlink'> <li><MdOutlineSpeakerNotes/> Comments</li></Link> */}
        {/* <hr></hr> */}
       <Link to ="/help" className='navlink'><li><AiOutlineCloud/> Help</li></Link>
       <hr></hr>
        <li onClick={handleExit}><RxExit/> Exit</li>
        <hr></hr>
      
        
        
      </ul>
    </div>
  )
}

export default Menu
