import { useDispatch, useSelector } from "react-redux";
import {
  selectFavoritesMovies,
  addMovieCardFavorite,
  deleteMovieCardFavorite,
} from "../redux/movieSlice";
import { useNavigate } from "react-router-dom";

const MovieCardView = (props) => {
  const {
    Title,
    Runtime,
    Released,
    Poster,
    Year,
    Director,
    Country,
    Genre,
    Plot,
    imdbRating,
    Actors,
    imdbID,
  } = props;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoritesMovies);
  const isFavorite = favorites.some((e) => e.imdbID === imdbID);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(isFavorite);
    if (!isFavorite) {
      dispatch(
        addMovieCardFavorite({
          Poster,
          Title,
          Year,
          imdbID,
        })
      );
      navigate("/");
    } else {
      dispatch(deleteMovieCardFavorite(imdbID));
      navigate("/");
    }
  };

  return (
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src={Poster} />
          <div className="movie_title">
            <h2>{Title}</h2>
            <h4>{Released}</h4>
            <span className="minutes">{Runtime}</span>
            <p className="type">{Genre}</p>
          </div>
          <div className="movie_crew">
            <p>Director: {Director}</p>
            <p>Actors: {Actors}</p>
            <p>Country: {Country}</p>
          </div>
        </div>
        <div className="movie_desc">
          <p className="text">{Plot}</p>
        </div>
        <div className="movie_social">
          <span className="material-icons">imdb: {imdbRating}</span>
          <button
            className={!isFavorite ? "button btn_add" : "button btn_remove"}
            onClick={handleClick}
          ></button>
        </div>
      </div>
      <div className="blur_back bright_back"></div>
    </div>
  );
};

export default MovieCardView;
