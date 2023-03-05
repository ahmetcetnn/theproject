import React from 'react'
import {AiTwotoneStar} from "react-icons/ai"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useState,useEffect } from 'react';
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function TopRated() {
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  

  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=002f45e7d56066b7503bddca0e16ee67&lanuage=tr";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleClose = () => {
    setShow(false);
    setSelectedMovie(null);
  };

  const handleShow = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
  };

  return (
    <div>
      <div className="toprated">
        <h1>
          <AiTwotoneStar /> Toprated Movies
        </h1>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem",
            height: "20rem",
          }}
        >
          {movies.map((movie) => (
            <SplideSlide key={movie.id}>
              <div className="trsplideimage">
                <img
                  id="trsplideimage"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <button id="trsplidebutton" onClick={() => handleShow(movie)}>
                  View More
                </button>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
     
     
     
      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
          {selectedMovie && (
            <div>
               <img id='modalimage' src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
              <h2>{selectedMovie.title}</h2>
              <p>{selectedMovie.overview}</p>
               <button id='modalbutton' onClick={handleClose}>
               Close Page
               </button>
            </div>
          )}
        </Modal.Body>
        
      </Modal>
    </div>
  );
}
export default TopRated
