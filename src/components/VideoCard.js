import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbsUp } from "@material-ui/icons";

const VideoCard = forwardRef (({ movie }, ref ) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className="videoCard">
      <img
        src={
          `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
          `${BASE_URL}${movie.poster_path}`
        }
        alt="movie poster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} `}
        {movie.release_date || movie.first_air_date}
        {movie.vote_count}
      </p>

     
    </div>
  );
});

export default VideoCard;
