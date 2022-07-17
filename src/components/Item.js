import React from 'react'

const Item = (props) => {
    const images_api= "https://image.tmdb.org/t/p/w1280"

    const setVoteClass = (vote) => {
        if(vote >= 7){
            return 'green';
        }else if(vote >=5){
            return 'yellow';
        }else if(vote >=3){
            return 'orange';
        }else{
            return 'red';
        }
    }

    let {media_type, poster_path, overview, vote_average, title, name} = props.data;
    let itemName;
    if(!vote_average){
      vote_average=0;  
    }
    if(media_type === "movie" || title) {
        itemName=title;
    }else if(media_type === "tv" || name){
        itemName=name;
    }

    return (
        <div className='movie'>
            <img src={poster_path?images_api+poster_path:"https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} alt={itemName} />
            <div className="movie-info">
                <h3>{itemName}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average.toFixed(1)}</span>
            </div>
            <div className="movie-over">
                <h2>Overview: </h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Item