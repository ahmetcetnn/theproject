import React, { useState ,useEffect} from 'react'
import yekflix from "../images/yekflix.png"
import { Link } from 'react-router-dom'
import {BiSearchAlt2} from "react-icons/bi"
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  //States
  const [show, setShow] = useState(false); //Modal aç kapa
  const [searchTerm,setSearchTerm] =useState("")
  const [movies, setMovies] = useState([]);
  const handleClose = () => {
    setShow(false);
    
  };
  //MODAL FONKSİYONLARI
  const handleShow = () => {
    setShow(true);
  };
   
  const searchMovie = (e) => {
  e.preventDefault()
  }
//USEFFECT
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=002f45e7d56066b7503bddca0e16ee67&lanuage=tr')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className='navbarüst'>       
        <div className='logo'><img src={yekflix} alt="logo"/></div>      
        <div className='navbar'>
       
{/* Onsubmit prevent defaulta sayfanın yeniden yüklenmesini engelliyor */}
        <form onSubmit={searchMovie}>
        <div className='search'>
            <input type="text"
              placeholder='Search Movie'
              className='searchbar' 
              onChange={(event) => {
                setSearchTerm(event.target.value)
              }}/>
              <button type='submit'
              id='submitbtn'
              onClick={() => handleShow()}>Search 
              <BiSearchAlt2 style={{marginBottom:"5px"}}/>
              </button>
            </div>
        </form>

        <Modal show={show} onHide={handleClose}>
        <div className='searchresults'>
        <Modal.Body>
        {
            movies 
              .filter((movie) => {
                if(searchTerm === ""){
                  return movie;
                }else if(movie.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return movie;
                }
              })
              .map((movie) => {
                return(
                  <div className="template" key={movie.id}>
                      <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                      <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                  </div> 
                  )})}
                   </Modal.Body>
        </div>
        </Modal>          
        <div className='logreg'>  
        <Link to ="/login" id='item1' className='navlink'><li>Log In </li></Link> | <Link to ="/register" id='item2' className='navlink'><li> <span>Register</span></li></Link> 
        </div>
        </div>
    </div>
  )
}
export default Navbar
