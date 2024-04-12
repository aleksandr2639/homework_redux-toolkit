import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavouritesMoviePage from "./pages/FavouritesMoviesPage";
import SearchMovieById from "./pages/SearchMovieById";
import "./App.css";
import Layout from "./components/Layout";
import CardView from "./components/CardView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchMovieById />} />
        <Route path="card/:imdbID" element={<CardView />} />
        <Route path="favourites" element={<FavouritesMoviePage />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
