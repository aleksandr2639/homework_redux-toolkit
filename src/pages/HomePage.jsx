import Search from "../components/Search";
import ListMovies from "../components/ListMovies";
import { useSelector } from "react-redux";
import MovieNotFound from "../components/MovieNotFound";
import Loader from "../components/Loader";
import { selectFoundMovies, selectLoading } from "../redux/movieSlice";

const HomePage = () => {
  const movies = useSelector(selectFoundMovies);
  const loading = useSelector(selectLoading);

  return (
    <>
      <div className="forms">
        <Search type="Title" />
        <Search type="Id" />
      </div>
      <div className="container_movies">
        {loading && <Loader />}
        {movies.Response === "True" &&
          movies.Search.map((el) => <ListMovies key={el.imdbID} {...el} />)}
      </div>
      {movies.Response === "False" && <MovieNotFound />}
    </>
  );
};

export default HomePage;
