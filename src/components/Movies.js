import React, {useEffect} from 'react';
import Movie from './Movie';

const Movies = ({movies, fetchMovies, url}) => {

  useEffect(() => {
    fetchMovies(url);
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