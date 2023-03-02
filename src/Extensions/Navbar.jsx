import React from 'react'
import yekflix from "../images/yekflix.png"
function Navbar() {
  return (
    <div className='navbarüst'>
        
        <div><img src={yekflix} alt="logo"/></div>
        
        
        
        <div className='navbar'>
        <li>
            <ul>Home</ul>
            <ul>Series</ul>
            <ul>Tv Show</ul>
            {/* <input type="text" placeholder='Search Movie' className='searchbar'/> */}
        </li>
       
       
        </div>
        
   
        
   
    </div>
    
  )
}

export default Navbar
