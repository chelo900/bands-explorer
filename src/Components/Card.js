import style from "./styles/Card.module.css";

const Card = ({ name, genreCode, year, country }) => {
  return (
    <div className={`${style.container} card`}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {genreCode} {year} {country}
        </p>
        <a href="#" className="btn btn-primary">
          See More
        </a>
      </div>
    </div>
  );
};

export default Card;
