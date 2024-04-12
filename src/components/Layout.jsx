import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const setActineClass = ({ isActive }) =>
  isActive ? "menu_item active" : "menu_item";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <>
      <header>
        <h1>Movies Search</h1>
        <nav>
          <NavLink className={setActineClass} to="/">
            Home
          </NavLink>
          <NavLink className={setActineClass} to="/favourites">
            Favourites
          </NavLink>
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer>@2024</footer>
    </>
  );
};

export default Layout;
