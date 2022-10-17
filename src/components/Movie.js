import React from 'react'

const Movie = ({adult, backdrop_path, genres, homepage, spoken_languages, overview, poster_path, tagline, vote_average, status, budget, imdb_id, title, release_date, revenue, runtime, team}) => {
  return (
    <>
    <div>Movie</div>
    <div>Backdrop Path: {backdrop_path}</div>
    <div>Title: {title}</div>
    <div>Tagline: {tagline}</div>
    <div>Vote Average: {vote_average}</div>
    <div>IMDB ID: {imdb_id}</div>
    <div>Genres: 
      {genres && genres.map((genre, index)=>{
        return <p key={index}>{genre.name}</p>;
      })}
    </div>
    <div>Adult: {adult?'true':'false'}</div>
    <div>Overview: {overview}</div>
    <div>Poster Path: {poster_path}</div>
    <div>Homepage: {homepage}</div>
    <div>Spoken Languages:
      {spoken_languages && spoken_languages.map((language, index)=>{
        return <p key={index}>{language.english_name}</p>;
      })}
    </div>
    <div>Status: {status}</div>
    <div>Release Date: {release_date}</div>
    <div>Budget: {budget}</div>
    <div>Revenue: {revenue}</div>
    <div>Runtime: {runtime}</div>
    <div>Team:
      Cast: 
      {team && team.map((member, index)=>{
        return (
          <p key={index}>{member.known_for_department==="Acting"?member.name:''}</p>
        );
      })}
      Director(s):
      {team && team.map((member, index)=>{
        return (
          <p>{member.job==="Director"?member.name:''}</p>
        );
      })}
      Producers:
      {team && team.map((member, index)=>{
        return (
          <p>{member.job==="Executive Producer"?member.name:''}</p>
        );
      })}
      Writers:
      {team && team.map((member, index)=>{
        return (
          <p>{member.department==="Writing"?member.name:''}</p>
        );
      })}
    </div>
    </>
  )
}

export default Movie