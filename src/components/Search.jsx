import { useDispatch } from "react-redux";
import { fetchMovie, fetchMovieById } from "../redux/movieSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = ({ type }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = e.currentTarget;
    console.log(name);
    console.log(typeof name);
    if (name === "Title") {
      dispatch(fetchMovie(value));
      console.log(value);
      setValue("");
      navigate("/");
    } else {
      dispatch(fetchMovieById(value));
      setValue("");
      navigate("/search");
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form className="row g-3" onSubmit={handleSubmit} name={type}>
      <div className="col-auto">
        <label htmlFor={type} className="visually-hidden">
          Type {type === "Title" ? "name" : "id"}
        </label>
        <input
          placeholder={`Type ${type === "Title" ? "name" : "id"} to search...`}
          id={type}
          type="text"
          className="form-control"
          name={type}
          onChange={handleChange}
          value={value}
          required
          style={{ width: "300px" }}
        />
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          style={{ background: "#315c77", fontWeight: "500", border: "none " }}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
