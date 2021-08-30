import React, {useState} from 'react';
import './App.css';
import MovieList from './MovieList';
import Filtre from './Filtre';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = ({movies, setmovies}) => {
const [keyword, setKeyword] = useState("");
const [newRate, setNewRate] = useState(1);
const search = (text) => {
  setKeyword(text);
}
const setRate = (rate) =>{
  setNewRate(rate);
}
const addMovie = (movie) => {
  setmovies(movies.concat(movie));
};

  return (
    <div className="Home">
    
      <Filtre search={search} setRate={setRate} newRate={newRate}/>
      
      <div>
     <MovieList
     addMovie={addMovie}
     movies={movies.filter(
       (movie) =>
       movie.rate >= newRate && movie.title.toLowerCase().includes(keyword.toLowerCase().trim()))}
     /> 
  <div>
    {movies.map((el)=> (
        <div>{el.name}</div>
     
    ))}
    <Link to="/Description">{movies.img}</Link>
  </div>
     </div>
    </div>
  )
}

export default Home
