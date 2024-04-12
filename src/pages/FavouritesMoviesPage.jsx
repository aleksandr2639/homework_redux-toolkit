import Search from "../components/Search";
import ListMovies from "../components/ListMovies";
import { useSelector } from "react-redux";
import MovieNotFound from "../components/MovieNotFound";
import Loader from "../components/Loader";
import { selectFavoritesMovies, selectLoading } from "../redux/movieSlice";

const FavouritesMoviePage = () => {
  const favorites = useSelector(selectFavoritesMovies);
  const loading = useSelector(selectLoading);

  return (
    <>
      <div className="container_movies">
        {loading && <Loader className="loader" />}
        {favorites !== 0 &&
          favorites.map((el) => <ListMovies key={el.imdbID} {...el} />)}
      </div>
      {favorites === 0 && <MovieNotFound />}
    </>
  );
};

export default FavouritesMoviePage;
