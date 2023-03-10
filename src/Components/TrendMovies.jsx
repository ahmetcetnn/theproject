import React, { useContext,useState,useEffect } from 'react'
import {AiTwotoneFire} from "react-icons/ai"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { GlobalContext } from '../Context/GlobalContext';



function TrendMovies({movie}) {

  const {addMovieToWatchlist,watchlist}= useContext(GlobalContext);
  




  const [movies, setMovies] = useState([]);
  

  const API_URL =
    'https://api.themoviedb.org/3/movie/upcoming?api_key=002f45e7d56066b7503bddca0e16ee67&lanuage=tr';

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  

  return (
    <>
      <div className='trendmovies'>
        <h1>
          <AiTwotoneFire /> Upcoming Movies
        </h1>
        <Splide
          options={{
            perPage: 1,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '1rem',
            height: '20rem',
          }}
        >
          {movies.map((movie) => (
            <SplideSlide key={movie.id}>
              <div className='splidebox'>
                <div className='splideimage'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className='splidetext'>
                  <h3>{movie.title}</h3>
                  <h4>
                    {movie.release_date} | IMDB:{movie.vote_average}{' '}
                  </h4>
                  <p>{movie.overview}</p>
                  <button className='tmbuttont'>Trailer</button>
                  <button className='tmbuttont'>Watch Movie</button>
                  <button className='tmbuttont' onClick={() => addMovieToWatchlist(movie)}>
                    Add Watchlist
                  </button>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
     
    </>
  );

}
export default TrendMovies


































