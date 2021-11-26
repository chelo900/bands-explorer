import BandsContainer from "../Components/BandsContainer";
import NavBar from "../Components/NavBar";
import Filters from "../Components/Filters";
import style from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { COUNTRIES, GENRES } from "../constants";
import { parseFilters } from "../utils/parseFilters";
import { parseSort } from "../utils/parseSort";

const HomePage = () => {
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bands, setBands] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/improvein/dev-challenge/genre")
      .then((res) => res.json())
      .then((data) => setGenres(data));
  }, []);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/improvein/dev-challenge/bands" +
        parseFilters(filters) +
        parseSort(sort)
    )
      .then((res) => res.json())
      .then((data) => {
        setBands(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [filters, sort]);

  const handleFilterSelect = (event) => {
    const { name, value } = event.target;
    if (value === "") {
      setFilters([]);
    } else {
      if (filters.find((filter) => filter.hasOwnProperty(name))) {
        setFilters([{ [name]: value }]);
      } else {
        setFilters([...filters, { [name]: value }]);
      }
    }
  };

  const handleSortSelect = (event) => {
    const { name, value } = event.target;
    if (value === "") {
      setSort({});
    } else {
      setSort({ ...sort, name, value });
    }
  };

  const handleClick = () => {
    setFilters([]);
    setSort({});
  };

  return (
    <div className={style.container}>
      <NavBar onClick={handleClick} />
      <Filters
        filters={filters}
        sort={sort}
        genres={genres}
        genresOptions={GENRES}
        countriesOptions={COUNTRIES}
        onFiltersChange={handleFilterSelect}
        onSortChange={handleSortSelect}
        onClick={handleClick}
      />
      <BandsContainer bands={bands} isLoading={isLoading} error={error} />
    </div>
  );
};

export default HomePage;
