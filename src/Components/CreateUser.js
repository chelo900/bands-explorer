import style from "./styles/CreateUser.module.css";

const CreateUser = () => {
  return (
    <div className={style.modalContainer} id="staticBackdrop">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className={`${style.modal} modal-header`}>
            <h5 className="modal-title" id="staticBackdropLabel">
              Create Account
            </h5>
            <form>
              <div>
                <label>Email</label>
                <div>
                  <input type="email" name="email" />
                  {/* {errors.email && (
                    <p className={style.error}> {errors.email} </p>
                  )} */}
                </div>
              </div>
              <div>
                <label>Password</label>
                <div>
                  <input type="password" name="password" />
                  {/* {errors.password && (
                    <p className={style.error}> {errors.password} </p>
                  )} */}
                </div>
              </div>
              <div>
                <label>Repeat Password</label>
                <div>
                  <input type="password" name="password2" />
                  {/* {errors.password2 && (
                    <p className={style.error}> {errors.password2} </p>
                  )} */}
                </div>
              </div>
            </form>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
