import React from 'react';

const images_api= "https://image.tmdb.org/t/p/w1280";

const TV = ({adult, backdrop_path, genres, homepage, spoken_languages, overview, poster_path, tagline, vote_average, status, created_by, episode_run_time, first_air_date, in_production, name, networks, number_of_episodes, number_of_seasons, origin_country, team, videos}) => {

  let video_key = null;
  if(videos){
    for(let i = 0; i < videos.results.length; i += 1){
      if(videos.results[i].name.includes("Trailer")){
        video_key=videos.results[i].key;
        break;
      }
    }
  }

  return (
    <>
    <img className='backdrop_image' src={backdrop_path?images_api+backdrop_path:"https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} />
    
    <div className="details-header">
      <div className="details-header-text">
        <a className="item name text-animation" href={homepage} target="blank">{name}</a>
        <div className="item tagline">{tagline}</div>
        <div className="item type">TV Series</div>
      </div>
      <div className="details-header-video">
        {video_key && 
          <iframe className="item video" 
          src={`https://www.youtube.com/embed/${video_key}?autoplay=1&mute=1&playlist=${video_key}&loop=1`}>
          </iframe>
        }
      </div>
    </div>

    <div className="details-modal">
      

      <div className="details-modal-header">
        <div className="item name">{name}</div>
        <img className='item poster' height="200px" width="133px" src={backdrop_path?images_api+poster_path:"https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} />
        <div className="item tagline">{`" ${tagline} "`}</div>
      </div>

      <div className="details-modal-bar">
        <div className="item rating">Rating: {vote_average}</div>
        <div className="item adult">Adult: {adult?'true':'false'}</div>
      </div>

      <div className="details-modal-description">

        <div className="description-overview">
          <div className="item overview">
            <span className="label">Overview:</span>
            <span className="value"> {overview}</span>
          </div>
          <div className="item genres">
            <span className="label">Genres:</span> 
            {genres && genres.map((genre, index)=>{
              return <span className="value" key={index}> {genre.name} </span>;
            })}
          </div>
        </div>

        <div className="description-trivial">
          <div className="item spoken-languages">
            <span className="label">Spoken Languages:</span>
            {spoken_languages && spoken_languages.map((language, index)=>{
              return <span className="value" key={index}> {language.english_name} </span>;
            })}
          </div>
          <div className="item status">
            <span className="label">Status:</span>
            <span className="value"> {status}</span>
          </div>
          <div className="item first-air-date">
            <span className="label">First Air Date:</span>
            <span className="value"> {first_air_date}</span>
          </div>
          <div className="item episode-run-time">
            <span className="label">Episode Run Time:</span>
            <span className="value"> {episode_run_time}</span>
          </div>
          <div className="item in_production">
            <span className="label">In Production:</span>
            <span className="value"> {in_production}</span>
          </div>
          <div className="item number_of_seasons">
            <span className="label">Number Of Seasons:</span>
            <span className="value"> {number_of_seasons}</span>
          </div>
          <div className="item number_of_episodes">
            <span className="label">Number Of Episodes:</span>
            <span className="value"> {number_of_episodes}</span>
          </div>
          <div className="item origin">
            <span className="label">Origin Country:</span>
            <span className="value"> {origin_country}</span>
          </div>
          <a className="item homepage text-animation" href={homepage} target="blank">Visit</a>
        </div>
      
      </div>

      <div>Network(s):
        {networks && networks.map((network, index)=>{
          return <span key={index}> {network.name} </span>
        })}
      </div>

      <div>Team:
        Cast: 
        {team && team.map((member, index)=>{
          return (
            <span key={index}> {member.known_for_department==="Acting"?member.name:''} </span>
          );
        })}
        Director(s):
        {team && team.map((member, index)=>{
          return (
            <span key={index}> {(member.job === "Director" || member.department==="Directing")?member.name:''} </span>
          );
        })}
        {created_by && created_by.map((member, index)=>{
          return (
            <span key={index}> {member.name} </span>
          );
        })}
        Producers:
        {team && team.map((member, index)=>{
          return (
            <span key={index}> {(member.job==="Executive Producer" || member.job==="Producer")?member.name:''} </span>
          );
        })}
        Writers:
        {team && team.map((member, index)=>{
          return (
            <span key={index}> {member.department==="Writing"?member.name:''} </span>
          );
        })}
      </div>

    </div>
    </>
  )
}

export default TV