import React from 'react'
import {FaHourglassStart} from "react-icons/fa"
import { useState,useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Latest() {
  const [movies,setMovies] = useState([]);
  const API_URL = "https://api.themoviedb.org/3/movie/latest?api_key=002f45e7d56066b7503bddca0e16ee67&lanuage=tr";
  
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
  }, []);








  return ( 
    <div className='latestmovies'>
      <h1><FaHourglassStart/> Latest Movies</h1>
      
      </div>
)
}

export default Latest
{/* <div className='latestmovies'>
      <h1><FaHourglassStart/> Latest Movies</h1>
      
      </div> */}