import React from 'react'
import {AiTwotoneStar,AiTwotoneFire} from "react-icons/ai"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useState,useEffect } from 'react';
function TopRated() {
  const [movies,setMovies] = useState([]);
  const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=002f45e7d56066b7503bddca0e16ee67&lanuage=tr";
  
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
  }, []);









return(<div>
    

    


  <div className='toprated'>
    <h1><AiTwotoneStar/> Toprated Movies</h1>
    <Splide options={{
        perPage:4,
        arrows:false,
        pagination:false,
        drag:'free',
        gap:'3rem',
        height:"20rem"
        
      }}>
      {movies.map(movie => (
        <SplideSlide key={movie.id} >
     
                <div className='trsplideimage' >
                <img id='trsplideimage' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                
             
              
              
            

               
          
          </div>
          
        </SplideSlide>
      ))}
    </Splide>
  </div>
  </div>
)
}

export default TopRated
