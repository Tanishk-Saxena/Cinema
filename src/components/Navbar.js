import React, {useState} from 'react'

const Navbar = ({fetchMovies}) => {

    const api_key="84e148ae58ace41622a3e87961fb231d";

    const search_api= `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`


    const [searchTerm, setSearchTerm] = useState('');
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
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Cinema</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Trending</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/movies/popular" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Movies
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/movies/popular">Popular</a></li>
                        <li><a className="dropdown-item" href="/movies/toprated">Top Rated</a></li>
                        <li><a className="dropdown-item" href="/movies/nowplaying">Now Playing</a></li>
                        <li><a className="dropdown-item" href="/movies/upcoming">Upcoming</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/tv/popular" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        TV Series
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/tv/popular">Popular</a></li>
                        <li><a className="dropdown-item" href="/tv/toprated">Top Rated</a></li>
                        <li><a className="dropdown-item" href="tv/currentlyonair">Currently On Air</a></li>
                        <li><a className="dropdown-item" href="tv/airingtoday">Airing Today</a></li>
                    </ul>
                    </li>
                </ul>
                <form className="d-flex" role="search" onSubmit={handleOnSubmit}>
                    <input className="form-control me-2" value={searchTerm} onChange={handleOnChange} type="search" placeholder="Search..." aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar