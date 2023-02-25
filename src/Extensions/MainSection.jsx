import React from 'react'
import TopRated from '../Components/TopRated';
import TrendMovies from '../Components/TrendMovies';
import Contunie from '../Components/Contunie';
import Latest from '../Components/Latest';

function MainSection() {
  return (
    <div className='movies'>
   
   
    <div className='trendmovies'>
            <TrendMovies/>
    </div>


    <div className="toprated">
        <TopRated/>
    </div>


    <div className='contunie'>
      <Contunie/>
    </div>
   


    </div>
  )
}

export default MainSection;
