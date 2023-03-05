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
      <h1><FaHourglassStart/> Movie Genre's</h1>
      <ul>
        <li>SIENCE FUCTION</li>
        <hr></hr>
        <li>ADVENTURE</li>
        <hr></hr>
        <li>COMEDY</li>
        <hr></hr>
        <li>DRAMA</li>
        <hr></hr>
        <li>ROMANTIC</li>
        <hr></hr>
        <li>ACTION</li>
        <hr></hr>
        <li>HORROR</li>
        <hr></hr>
        <li>FANTASY</li>
        <hr></hr>
      </ul>
      </div>
)
}

export default Latest
