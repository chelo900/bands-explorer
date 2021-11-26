import style from "./Filters.module.css";

const Filters = ({
  sort,
  filters,
  genres,
  genresOptions,
  countriesOptions,
  onFiltersChange,
  onSortChange,
  onClick,
}) => {
  return (
    <div className={style.container}>
      <span className="dropdown">
        <select
          className="dropdown-select"
          onChange={onFiltersChange}
          name="genreCode"
          value={
            filters?.find((filter) => filter.hasOwnProperty("genreCode"))
              ?.genreCode || ""
          }
        >
          <option value="">Filter by Genre</option>
          {genresOptions.map((genre) => (
            <option
              key={genre}
              value={genres.find((gen) => gen.name === genre)?.code}
            >
              {genre}
            </option>
          ))}
        </select>
      </span>
      <span className="dropdown">
        <select
          className="dropdown-select"
          onChange={onFiltersChange}
          name="country"
          value={
            filters?.find((filter) => filter.hasOwnProperty("country"))
              ?.country || ""
          }
        >
          <option value="">Filter by Country</option>
          {countriesOptions.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </span>
      <span className="dropdown">
        <select
          className="dropdown-select"
          onChange={onSortChange}
          name="name"
          value={sort.name === "name" ? sort?.value : ""}
        >
          <option value="">Sort by Name</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </span>
      <span className="dropdown">
        <select
          className="dropdown-select"
          onChange={onSortChange}
          name="year"
          value={sort.name === "year" ? sort?.value : ""}
        >
          <option value="">Sort by Year</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </span>
      <br></br>
      <div>
        <button className="btn btn-primary" onClick={onClick}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};
export default Filters;
