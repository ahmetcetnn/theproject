import React from 'react'
import Navbar from '../Extensions/Navbar'
import Menu from '../Extensions/Menu'

function Watchlist() {

  return (
    <div>
        
       <Navbar/>
      <Menu/>    
      <ul>
        {/* {watchlist.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))} */}
      </ul>
    </div>
  )
}

export default Watchlist
