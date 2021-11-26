import { Link } from "react-router-dom";
import Card from "./Card";
import style from "./BandsContainer.module.css";

const BandsContainer = ({ bands, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className={style.container} style={{ height: "100vh" }}>
        <div
          className="spinner-border"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (bands.length === 0) {
    return (
      <div className={style.container}>
        <h2>No bands found</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div class="alert alert-primary" role="alert">
        There was an error. Please refresh your page.
      </div>
    );
  }

  return (
    <div className={style.container}>
      {bands.length &&
        bands.map((band) => (
          <Link to="/home" key={band.id} className={`${style.link}`}>
            <Card
              name={band.name}
              genreCode={band.genreCode}
              year={band.year}
              country={band.country}
            />
          </Link>
        ))}
    </div>
  );
};

export default BandsContainer;
