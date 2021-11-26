import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import BandDetail from "../Components/BandDetail";
import style from "./DetailPage.module.css";

const DetailPage = () => {
  const [band, setBand] = useState({});
  const [genre, setGenre] = useState("");
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const id = window.location.pathname.split("/")[2];
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/improvein/dev-challenge/bands?id=" +
        id
    )
      .then((res) => res.json())
      .then((data) => {
        setBand(data[0]);

        fetch(
          "https://my-json-server.typicode.com/improvein/dev-challenge/albums?bandId=" +
            id
        )
          .then((res) => res.json())
          .then((data) => {
            setAlbums(data);
          });

        fetch(
          "https://my-json-server.typicode.com/improvein/dev-challenge/genre?code=" +
            data[0].genreCode
        )
          .then((res) => res.json())
          .then((data) => {
            setGenre(data[0].name);
          });
      })
      .catch((error) => {
        setError(error);
      });
    setIsLoading(false);
  }, []);

  return (
    <div className={style.container}>
      <NavBar />
      <BandDetail
        band={band}
        genre={genre}
        albums={albums}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default DetailPage;
