import React from 'react'
import Navbar from '../Extensions/Navbar'
import Menu from '../Extensions/Menu'
function Help() {
  return (
    <div>
        <Navbar/>
        <Menu/>
      <h1>Do you have any question?</h1>
      <h4>Here is my contact info</h4>
      <a href='tel:+905377013634'>Call Me</a>
      <br></br>
      <a href='mailto:ahmetlaw@outlook.com'>Send Me E-Mail</a>
    </div>
  )
}

export default Help
