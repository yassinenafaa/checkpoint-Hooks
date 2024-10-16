import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import { moviesData } from "./data";
import AddMovie from "./Components/AddMovie";
import FilterName from "./Components/FilterName";
import FilterRate from "./Components/Rating";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className='App'>
      <h1>Movie App</h1>
      <FilterName inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <FilterRate rating={rating} setRating={setRating} isMovieRating={false} />
      <AddMovie add={add} />
      <MovieList movies={movies} inputSearch={inputSearch} rating={rating} />
    </div>
  );
}

export default App;
