import Card from "./Card";
import { useEffect, useState } from "react";
import style from "./styles/BandsContainer.module.css";

const BandsContainer = () => {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/improvein/dev-challenge/bands")
      .then((res) => res.json())
      .then((data) => setBands(data));
  }, []);

  return (
    <div className={style.container}>
      {bands.length &&
        bands.map((band) => (
          <Card
            key={band.id}
            name={band.name}
            genreCode={band.genreCode}
            year={band.year}
            country={band.country}
          ></Card>
        ))}
    </div>
  );
};
export default BandsContainer;
