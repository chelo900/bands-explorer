import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
const NavBar = ({ onClick }) => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  return (
    <nav className={`${style.container} navbar navbar-light bg-light`}>
      <span className={style.user}>
        Logged in as "
        {loggedUser.email.slice(0, loggedUser.email.indexOf("@")).toUpperCase()}
        "
      </span>
      <span>
        <Link to="/home" className={`${style.link}`} onClick={onClick}>
          HOME PAGE
        </Link>
      </span>
      <span className={style.logout}>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Logout
        </button>
      </span>
    </nav>
  );
};
export default NavBar;
