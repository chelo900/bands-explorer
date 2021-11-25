import { useEffect, useState } from "react";
import Card from "./Card";
import style from "./styles/BandsContainer.module.css";

const BandsContainer = () => {
  const [bands, setBands] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // setIsLoading(true);
    fetch("https://my-json-server.typicode.com/improvein/dev-challenge/bands")
      .then((res) => res.json())
      .then((data) => {
        // setIsLoading(false)
        setBands(data);
      });
    // .catch((error) => {
    //   // setError(error);
    // };
  }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if(bands.length === 0) {
  //   // render empty state
  // }

  // if (error) {
  //   // render error state
  //   return (<div class="alert alert-primary" role="alert">
  //     Hubo un error al cargar los datos.
  //   </div>
  //   );
  // }

  return (
    <div className="container">
      <div className="row justify-content-center justify-content-md-between">
        {bands.length &&
          bands.map((band) => (
            <div key={band.id} className="col-9 col-sm-6 col-md-4">
              <a>
                <Card
                  name={band.name}
                  genreCode={band.genreCode}
                  year={band.year}
                  country={band.country}
                />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};
export default BandsContainer;
