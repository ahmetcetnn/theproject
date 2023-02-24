import React from 'react'
import TopRated from '../Components/TopRated';
import TrendMovies from '../Components/TrendMovies'

function MainSection() {
  return (
    <div className='movies'>
   
   
    <div className='trendmovies'>
            <TrendMovies/>
    </div>


    <div className="toprated">
        <TopRated/>
    </div>


    <div>
      <h1>biseyelr</h1>
    </div>


    </div>
  )
}

export default MainSection;
