import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";


function App() {

  const api_key=process.env.REACT_APP_API_KEY;
  console.log(api_key);
  const trending_api= `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`;
  const now_playin_movies_api= `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`;
  const popular_movies_api= `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
  const top_rated_movies_api= `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;
  const upcoming_movies_api= `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;
  const tv_airing_today_api= `https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}&language=en-US&p`;
  const tv_on_the_air_api= `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}&language=en-US&page=1`;
  const popular_tv_api= `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`;
  const top_rated_tv_api= `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=1`;
  const search_api= `
  https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=`;

  const [movies, setMovies] = useState([]);

  const fetchMovies = async (api) => {
    const moviesResponse = await fetch(api);
    const moviesJSON = await moviesResponse.json();
    console.log(moviesJSON);
    setMovies(moviesJSON.results);
  }

  return (
    <>
    <Router>
    <Navbar fetchMovies={fetchMovies} url={search_api}/>
    {/* <header>
      <form onSubmit={handleOnSubmit}>
        <input type="search" value={searchTerm} onChange={handleOnChange} placeholder='Search...' className="search" />
      </form>
    </header> */}
    <Switch>
      <Route exact path="/" element={<Movies key="/" movies={movies} fetchMovies={fetchMovies} url={trending_api}/>}/>
      <Route exact path="/trending" element={<Movies key="/trending" movies={movies} fetchMovies={fetchMovies} url={trending_api}/>}/>
      <Route exact path="/movies/popular" element={<Movies key="/movies/popular" Movies movies={movies} fetchMovies={fetchMovies} url={popular_movies_api}/>}/>
      <Route exact path="/movies/toprated" element={<Movies key="/movies/toprated" movies={movies} fetchMovies={fetchMovies} url={top_rated_movies_api}/>}/>
      <Route exact path="/movies/nowplaying" element={<Movies key="/movies/nowplaying" movies={movies} fetchMovies={fetchMovies} url={now_playin_movies_api}/>}/>
      <Route exact path="/movies/upcoming" element={<Movies key="/movies/upcoming" movies={movies} fetchMovies={fetchMovies} url={upcoming_movies_api}/>}/>
      <Route exact path="/tv/popular" element={<Movies key="/tv/popular" movies={movies} fetchMovies={fetchMovies} url={popular_tv_api}/>}/>
      <Route exact path="/tv/toprated" element={<Movies key="/tv/toprated" movies={movies} fetchMovies={fetchMovies} url={top_rated_tv_api}/>}/>
      <Route exact path="/tv/currentlyonair" element={<Movies key="/tv/currentlyonair" movies={movies} fetchMovies={fetchMovies} url={tv_on_the_air_api}/>}/>
      <Route exact path="/tv/airingtoday" element={<Movies key="/tv/airingtoday" movies={movies} fetchMovies={fetchMovies} url={tv_airing_today_api}/>}/>
    </Switch>
    </Router>
    </>
  );

}

export default App;
