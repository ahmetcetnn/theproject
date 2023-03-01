import React from 'react'
import {AiOutlinePlayCircle} from "react-icons/ai"
import { useState,useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Contunie() {
  const [movies,setMovies] = useState([]);
  const API_URL = "https://api.themoviedb.org/3/tv/top_rated?api_key=002f45e7d56066b7503bddca0e16ee67&language=en-US&page=1";
  
  
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
  }, []);









return( <div>
    

    


  <div className='contunie'>
    <h1><AiOutlinePlayCircle/> Now Playing Series</h1>
    <Splide options={{
        perPage:1,
        arrows:false,
        pagination:false,
        drag:'free',
        gap:'3rem',
        height:"35rem"
        
      }}>
      {movies.map(movie => (
        <SplideSlide key={movie.id} >
     
                <div className='npsplideimage' >
                <img id='npsplideimage' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                
              
                </div>
                
             
        </SplideSlide>
      ))}
    </Splide>
  </div>
  </div>
)
}

export default Contunie
