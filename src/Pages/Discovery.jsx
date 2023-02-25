import React from 'react'
import Navbar from '../Extensions/Navbar'
import Menu from '../Extensions/Menu'
import axios from 'axios';
import  { useEffect, useState } from 'react';


function Discovery() {
    const [randomMovie, setRandomMovie] = useState(null);
    useEffect(() => {
        fetch(
          "https://api.themoviedb.org/3/tv/top_rated?api_key=002f45e7d56066b7503bddca0e16ee67&language=en-US&page=1"
        )
          .then((response) => response.json())
          .then((data) => {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            setRandomMovie(data.results[randomIndex]);
          });
      }, []);




  return (
    <div>
      <Navbar/>
      <Menu/>    
      <div className='random'>
      {randomMovie && (
        <>
          <h2>{randomMovie.name}</h2>
          <img
            id='randomimage'
            src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
            alt={randomMovie.name}
          />
          <p>IMDB: {randomMovie.vote_average} Country:{randomMovie.origin_country}</p>
         
          <p>{randomMovie.overview}</p>
        </>
      )}
      </div>
    </div>
  )
}

export default Discovery
