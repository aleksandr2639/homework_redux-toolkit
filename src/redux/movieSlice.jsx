import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const urlAPI = "https://www.omdbapi.com/?apikey=";
const key = "bfd5a2cb";

const initialState = {
  listFilms: {
    Response: "",
    Search: [],
    Error: "",
  },
  favoriteMovies: [],
  movieCard: null,
  loading: false,
  error: null,
};

export const fetchMovie = createAsyncThunk(
  "movies/fetchMovie",
  async (title) => {
    const url = `${urlAPI}${key}&s=${title}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (id) => {
    const url = `${urlAPI}${key}&i=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovieCardFavorite: (state, action) => {
      state.favoriteMovies = [...state.favoriteMovies, action.payload];
    },
    deleteMovieCardFavorite: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (item) => item.imdbID !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
        (state.listFilms = {
          Response: "",
          Search: [],
          Error: "",
        }),
          (state.movieCard = null);
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        if (action.payload.Response === "True") {
          state.listFilms = action.payload;
        } else {
          state.listFilms = {
            Search: [],
            Response: action.payload.Response,
            Error: action.payload.Error,
          };
        }
        state.loading = false;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.movieCard = null;
        state.listFilms = {
          Response: "",
          Search: [],
          Error: "",
        };
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.movieCard = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.movieCard = null;
        state.error = action.error;
      });
  },
});
export const { addMovieCardFavorite, deleteMovieCardFavorite } =
  movieSlice.actions;
export const selectFoundMovies = (state) => state.movies.listFilms;
export const selectFavoritesMovies = (state) => state.movies.favoriteMovies;
export const selectMovieCard = (state) => state.movies.movieCard;
export const selectError = (state) => state.movies.error;
export const selectLoading = (state) => state.movies.loading;

export default movieSlice.reducer;
