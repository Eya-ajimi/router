import React, { useState } from 'react';
import {MoviesData} from './components/MoviesData';
import SearchMovie from './components/SearchMovie/SearchMovie'
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie/AddMovie';
import { Route} from 'react-router-dom';
import './App.css';
import Description from './components/Description';


function App() {
  const [moviesList, setMoviesList] = useState(MoviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
      <Route exact path="/" render={()=>  <>
        <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div></>}  />
      
       <div>
         <Route path ="/description/:Idmovie" render ={(props)=> <Description
          movie ={moviesList}
          {...props}/>} />
       </div>
      </div>
      
    
  );
}

export default App;