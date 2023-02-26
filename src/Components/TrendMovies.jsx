import React from 'react'
import {AiTwotoneFire} from "react-icons/ai"
import {AiTwotoneStar} from "react-icons/ai"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useState,useEffect } from 'react';


function TrendMovies() {
  
  const [movies,setMovies] = useState([]);
  const API_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=002f45e7d56066b7503bddca0e16ee67&lanuage=tr";
  
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
  }, []);

  return ( <div>
    

    


    <div className='trendmovies'>
      <h1><AiTwotoneFire/> Upcoming Movies</h1>
      <Splide options={{
          perPage:1,
          arrows:false,
          pagination:false,
          drag:'free',
          gap:'1rem',
          height:"20rem"
          
        }}>
        {movies.map(movie => (
          <SplideSlide key={movie.id} >
            <div  className='splidebox'>
                  <div className='splideimage' >
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  </div>
                  <div className='splidetext' >
                  <h3>{movie.title}</h3>
                  <h4>{movie.release_date} | IMDB:{movie.vote_average} </h4>
                  <p>{movie.overview}</p>
                  <button id='tmbuttont'>Trailer</button>
                  <button id='tmbuttonw'>Watch Movie</button>
                  <button id='tmbuttont'>Add Watchlist</button>
                  {/* onclickler gelecek butonlara */}

                  </div>
            
            </div>
            
          </SplideSlide>
        ))}
      </Splide>
    </div>
    </div>
  )
}
//style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}}

export default TrendMovies;




































{/* <div className='trendmovies'>
      <h1><AiTwotoneStar/> Top Rated</h1>
      <Splide options={{
          perPage:4,
          arrows:false,
          pagination:false,
          drag:'free',
          gap:'5rem',
        }}>
        {movies.map(movie => (
          <SplideSlide key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </SplideSlide>
        ))}
      </Splide> */}