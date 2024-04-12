import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieById,
  selectMovieCard,
  selectLoading,
} from "../redux/movieSlice";
import Loader from "./Loader";
import { useEffect } from "react";
import MovieCardView from "./MovieCardView.jsx";

const CardView = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movieCard = useSelector(selectMovieCard);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    if (imdbID) {
      dispatch(fetchMovieById(imdbID));
    }
  }, [imdbID, dispatch]);

  return (
    <>
      {loading && <Loader />}
      {movieCard && <MovieCardView {...movieCard} />}
    </>
  );
};

export default CardView;
