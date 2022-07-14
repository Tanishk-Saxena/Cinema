import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Movies from './components/Movies';

function App() {

  const [movies, setMovies] = useState([]);

  const fetchMovies = async (api) => {
    const moviesResponse = await fetch(api);
    const moviesJSON = await moviesResponse.json();
    console.log(moviesJSON);
    setMovies(moviesJSON.results);
  }

  return (
    <>
    <Navbar fetchMovies={fetchMovies}/>
    {/* <header>
      <form onSubmit={handleOnSubmit}>
        <input type="search" value={searchTerm} onChange={handleOnChange} placeholder='Search...' className="search" />
      </form>
    </header> */}
    <Movies movies={movies} fetchMovies={fetchMovies}/>
    </>
  );
  
}

export default App;
