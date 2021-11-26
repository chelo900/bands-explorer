import { isEmpty } from "lodash";
import style from "./BandDetail.module.css";

const BandDetail = ({ band, genre, albums, isLoading, error }) => {
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

  if (isEmpty(band) && isLoading) {
    return (
      <div className={style.container}>
        <h2>No band found</h2>
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
    <div className="modal-dialog rounded">
      <div className="modal-content">
        <div className="modal-header justify-content-center">
          <h3 className="modal-title ">{band?.name}</h3>
        </div>
        <div className="modal-header">
          <span className="fw-bold">Genre: </span>
          <div>{genre}</div>
          <span className="fw-bold">Founded: </span>
          <div>{band?.year}</div>
          <span className="fw-bold">Country: </span>
          <div>{band?.country}</div>
        </div>
        <div className="modal-header flex-column">
          <div className="p-1 fw-bold">Members</div>
          <div>
            {band?.members?.map((member) => (
              <li className="p-1" key={member.name}>
                {member.name}
              </li>
            ))}
          </div>
        </div>
        <div className="modal-header flex-column">
          <div className="p-1 fw-bold">Albums</div>
          <div className="flex-column justify-content-between">
            {albums.length
              ? albums?.map((album) => (
                  <li
                    className="p-1"
                    key={album.name}
                  >{`${album.name} - ${album.year}`}</li>
                ))
              : "No albums info"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandDetail;
