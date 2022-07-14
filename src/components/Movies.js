import React, {useEffect} from 'react';
import Movie from './Movie';

const Movies = ({movies, fetchMovies}) => {

  const api_key="84e148ae58ace41622a3e87961fb231d";
  const featured_api= `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`

  useEffect(() => {
    fetchMovies(featured_api);
  }, []);

  return (
    <div>
        <div className="movie-container">
        {movies.length>0 && movies.map((movie) => {
            return (
            <Movie data={movie} key={movie.id}/>
            );  
        })}
        </div>
    </div>
  )
  
}

export default Movies