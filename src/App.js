import Movie from './components/Movie';
import {useState, useEffect} from 'react';

function App() {

  const api_key="84e148ae58ace41622a3e87961fb231d";

  const featured_api= `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`
  const search_api= `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMovies(featured_api);
  }, [])

  const fetchMovies = async (api) => {
    const moviesResponse = await fetch(api);
    const moviesJSON = await moviesResponse.json();
    console.log(moviesJSON);
    setMovies(moviesJSON.results);
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }
  
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if(searchTerm){
      fetchMovies(search_api+searchTerm);
      setSearchTerm('');
    }
  }

  return (
    <>
    <header>
      <form onSubmit={handleOnSubmit}>
        <input type="search" value={searchTerm} onChange={handleOnChange} placeholder='Search...' className="search" />
      </form>
    </header>
    <div className="movie-container">
      {movies.length>0 && movies.map((movie) => {
        return (
          <Movie data={movie} key={movie.id}/>
        );  
      })}
    </div>
    </>
  );
}

export default App;
