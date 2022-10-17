import React from 'react'

const TV = ({adult, backdrop_path, genres, homepage, spoken_languages, overview, poster_path, tagline, vote_average, status, created_by, episode_run_time, first_air_date, in_production, name, networks, number_of_episodes, number_of_seasons, origin_country, team}) => {
  return (
    <>
    <div>TV</div>
    <div>Backdrop Path: {backdrop_path}</div>
    <div>Name: {name}</div>
    <div>Tagline: {tagline}</div>
    <div>Vote Average: {vote_average}</div>
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
    <div>First Air Date: {first_air_date}</div>
    <div>Episode Run Time: {episode_run_time}</div>
    <div>In Production: {in_production}</div>
    <div>Number Of Seasons: {number_of_seasons}</div>
    <div>Number Of Episodes: {number_of_episodes}</div>
    <div>Origin Country: {origin_country}</div>
    <div>Networks:
      {networks && networks.map((network, index)=>{
        return <p key={index}>{network.name}</p>
      })}
    </div>
    <div>Team:
      Cast: 
      {team && team.map((member, index)=>{
        return (
          <p key={index}>{member.known_for_department==="Acting"?member.name:''}</p>
        );
      })}
      Director(s):
      {created_by && created_by.map((member, index)=>{
        return (
          <p>{member.name}</p>
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

export default TV