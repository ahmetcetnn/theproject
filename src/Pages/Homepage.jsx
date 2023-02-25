import React from 'react'
import Menu from '../Extensions/Menu'
import Navbar from '../Extensions/Navbar'
import MainSection from '../Extensions/MainSection'
import Latest from '../Extensions/Latest'
function Homepage() {
  return (
   
    <div>
        <Navbar/>
        <MainSection/>
        <Latest/>
        <Menu/>       
        </div>
    

  )
}

export default Homepage
