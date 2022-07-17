import {useState} from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import List from './components/List';


function App() {


  const api_key=process.env.REACT_APP_API_KEY;

  const trending_api= `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`;
  const now_playin_movies_api= `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US`;
  const popular_movies_api= `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US`;
  const top_rated_movies_api= `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`;
  const upcoming_movies_api= `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US`;
  const tv_airing_today_api= `https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}&language=en-US&p`;
  const tv_on_the_air_api= `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}&language=en-US`;
  const popular_tv_api= `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US`;
  const top_rated_tv_api= `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US`;
  const search_api= `
  https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&include_adult=false&query=`;

  return (
    <>
    <Router>
    <Navbar/>
    {/* <header>
      <form onSubmit={handleOnSubmit}>
        <input type="search" value={searchTerm} onChange={handleOnChange} placeholder='Search...' className="search" />
      </form>
    </header> */}
    <Switch>
      <Route exact path="/search" element={<List key="/search" title={"Search Results"} url={search_api}/>}/>
      <Route exact path="/" element={<List key="/" title={"Welcome to Cinema! Find your next binge..."} url={trending_api}/>}/>
      <Route exact path="/trending" element={<List key="/trending" title={"Trending Movies and TV Series"} url={trending_api}/>}/>
      <Route exact path="/movies/popular" element={<List key="/movies/popular" title={"Popular Movies"} url={popular_movies_api}/>}/>
      <Route exact path="/movies/toprated" element={<List key="/movies/toprated" title={"Top-rated Movies of all time"} url={top_rated_movies_api}/>}/>
      <Route exact path="/movies/nowplaying" element={<List key="/movies/nowplaying" title={"Movies now playing in theatres"} url={now_playin_movies_api}/>}/>
      <Route exact path="/movies/upcoming" element={<List key="/movies/upcoming" title={"Upcoming Movies"} url={upcoming_movies_api}/>}/>
      <Route exact path="/tv/popular" element={<List key="/tv/popular" title={"Popular TV Shows"} url={popular_tv_api}/>}/>
      <Route exact path="/tv/toprated" element={<List key="/tv/toprated" title={"Top-rated TV Shows of all time"} url={top_rated_tv_api}/>}/>
      <Route exact path="/tv/currentlyonair" element={<List key="/tv/currentlyonair" title={"TV Shows currently on air"} url={tv_on_the_air_api}/>}/>
      <Route exact path="/tv/airingtoday" element={<List key="/tv/airingtoday" title={"TV Shows airing today"} url={tv_airing_today_api}/>}/>
    </Switch>
    </Router>
    </>
  );

}

export default App;
