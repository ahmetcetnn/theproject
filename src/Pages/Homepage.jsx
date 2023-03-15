import React from 'react'
import Menu from '../Extensions/Menu'
import Navbar from '../Extensions/Navbar'
import MainSection from '../Extensions/MainSection'
import Latest from "../Components/Latest"
function Homepage() {
  return (
   
    <div>
        <Navbar/>
        <Menu/> 
         {/* <Latest/> */}
        <MainSection/>
       
              
        </div>
    

  )
}

export default Homepage
