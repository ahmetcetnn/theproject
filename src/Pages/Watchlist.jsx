import React from 'react'
import Navbar from '../Extensions/Navbar'
import Menu from '../Extensions/Menu'
import { useContext } from 'react'
import { GlobalContext} from '../Context/GlobalContext'

function Watchlist() {

 

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
