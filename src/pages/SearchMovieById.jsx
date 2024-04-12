import Search from "../components/Search";
import ListMovies from "../components/ListMovies";
import { useSelector } from "react-redux";
import MovieNotFound from "../components/MovieNotFound";
import { selectMovieCard, selectLoading } from "../redux/movieSlice";
import Loader from "../components/Loader";

const SearchMovieById = () => {
  const moviesCard = useSelector(selectMovieCard);
  const loading = useSelector(selectLoading);
  console.log(moviesCard);
  return (
    <>
      <div className="forms">
        <Search type="Title" />
        <Search type="Id" />
      </div>
      <div className="container_movies">
        {loading && <Loader />}
        {moviesCard && moviesCard.Response === "True" && (
          <ListMovies {...moviesCard} />
        )}
      </div>
      {moviesCard && moviesCard.Response === "False" && <MovieNotFound />}
    </>
  );
};

export default SearchMovieById;
