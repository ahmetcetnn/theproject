import React from 'react'
import Navbar from '../Extensions/Navbar'
import Menu from '../Extensions/Menu'
import { useContext } from 'react'
import { GlobalContext} from '../Context/GlobalContext'

function Watchlist() {
  const {watchlist,removeMovieFromWatchlist} =useContext(GlobalContext)
  const handleRemoveMovieFromWatchlist = (id) => {
    removeMovieFromWatchlist(id);
  }

  return (
    <>
      <Navbar/>
      <Menu/>
      <h1>Watchlist </h1>
      <div className='watchlist'>
      
      {watchlist.map((movie) => (
        <div key={movie.id} className='watchlist-movie'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className='watchlist-movie-text'>
            <h3>{movie.title}</h3>
            <h4>
              {movie.release_date} | IMDB:{movie.vote_average}{' '}
            </h4>
            {/* <p>{movie.overview}</p> */}
            <button onClick={() => handleRemoveMovieFromWatchlist(movie.id)}>Remove From Watchlist</button>
          </div>
        </div>
      ))}
      
      </div>
    </>
  );
}

export default Watchlist;


