import React from "react";
import { Link } from "react-router-dom";

const ListMovies = ({ Poster, Title, Year, imdbID }) => {
  return (
    <Link to={`/card/${imdbID}`}>
      <div className="movie-card">
        <div className="movie-img">
          <img src={Poster} alt="Poster" />
        </div>
        <div className="card-body">
          <h2 className="movie-title">{Title}</h2>
          <p className="movie-intro">{Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default ListMovies;
