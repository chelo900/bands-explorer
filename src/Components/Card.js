import Icon from "@mdi/react";
import { mdiMapMarker, mdiCalendar } from "@mdi/js";
import style from "./Card.module.css";

const Card = ({ name, genreCode, year, country }) => {
  return (
    <div className={`${style.container} card text-center`}>
      <div className="card-body text-start">
        <h5 className="card-title text-center">{name}</h5>
        <div className="pb-1">
          <div className={style.icon}>
            <Icon
              path={mdiCalendar}
              title="country"
              size={1}
              horizontal
              vertical
              rotate={180}
              color="blue"
            />
          </div>
          {year}
        </div>
        <div className="pb-1">
          <div className={style.icon}>
            <Icon
              path={mdiMapMarker}
              title="country"
              size={1}
              horizontal
              vertical
              rotate={180}
              color="blue"
            />
          </div>
          <span className={style.cardCountry}>{country}</span>
        </div>
        <div className="badge bg-primary">{genreCode}</div>
      </div>
    </div>
  );
};

export default Card;
