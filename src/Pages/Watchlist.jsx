import React from 'react'
import Navbar from '../Extensions/Navbar'
import Menu from '../Extensions/Menu'
// import { Maincontext,useContext } from '../Context/GlobalContext'

function Watchlist() {

//  const {watchlist}=useContext(Maincontext)

  return (
    <div>
        
       <Navbar/>
       <Menu/>    
      {/* <ul>
        {watchlist.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Watchlist
