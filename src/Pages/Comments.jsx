import React, { useState,useEffect } from 'react'
import Menu from '../Extensions/Menu'
import Navbar from '../Extensions/Navbar'
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Comments() {
  const [show, setShow] = useState(false);
  const [moviename, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);
  const [opinion, setOpinion] = useState("");
  const [opinions, setOpinions] = useState([]);
  useEffect(() => {
    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }

    const savedOpinions = localStorage.getItem('opinions');
    if (savedOpinions) {
      setOpinions(JSON.parse(savedOpinions));
    }
  }, []);

  const handleMovieNameChange = (e) => {
    setMovieName(e.target.value);
  };

  const handleSaveClick = () => {
    const newMovie = { name: moviename, opinion: "" };
    setMovies([...movies, newMovie]);
    setMovieName("");
    localStorage.setItem('movies', JSON.stringify([...movies, newMovie]));
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (movie) => {
    setShow(true);
  };
  const handleOpinionChange = (e) => {
    setOpinion(e.target.value);
  };
  const handleOpinionSave = () => {
    setOpinions([...opinions, opinion]);
    setOpinion("");
    localStorage.setItem('opinions', JSON.stringify([...opinions, opinion]));
  };

  
  
  return (
    <>
      <Navbar />
      <Menu />

      <div className="rewiev">
        <input
          type="text"
          placeholder="Add a movie name"
          value={moviename}
          onChange={handleMovieNameChange}
        />
        <button type="button" onClick={handleSaveClick}>
          Save
        </button>
        <br />
      </div>
      <div className="outputss">
        {movies.map((movie, index) => (
          <div className="outputs" key={index}>
            <p id='film'>{movie}</p>
            <button id='filmbuton' type="button" onClick={() => handleShow(movie)}>
              Edit
            </button>
          </div>
        ))}
      </div>
      
      
      
      
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{ width:"600px" }}>
          <div>
            <h1>What's your opinion about the movie?</h1>
            <textarea value={opinion} onChange={handleOpinionChange} />
            <button onClick={handleOpinionSave}>Save</button>
            <br />
            {opinions.map((opinion, index) => (
              <div className='rewievmodal' key={index}>
                <p>{opinion}</p>
              </div>
            ))}
            <button id="modalbutton" className="modalbuton" onClick={handleClose}>
              Close Page
            </button>
          </div>
        </Modal.Body>
      </Modal>






    </>
  );
}

export default Comments;
