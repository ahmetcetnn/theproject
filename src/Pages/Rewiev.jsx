import React from 'react'
import Menu from '../Extensions/Menu'
import Navbar from '../Extensions/Navbar'

function Rewiev() {
  return (
    <div>
      <Navbar/>
      <Menu/>
      
      <div className='rewiev'>
        <h4>Do you want to take note of the thoughts the movie inspired in you? You can use this space for that.</h4>
      </div>
    </div>
  )
}

export default Rewiev
