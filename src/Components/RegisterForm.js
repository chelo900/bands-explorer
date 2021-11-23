import { isEmpty } from "lodash";
import { useState } from "react";
import Swal from "sweetalert2";
import { validateAccount } from "../utils/validateAccount";
import style from "./styles/CreateUserForm.module.css";

const RegisterForm = ({ setCreateUser, setUsers, users }) => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [inputError, setInputError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
    setInputError(validateAccount({ ...newUser, [name]: value }));
  };

  const handleClick = () => {
    if (users.find((user) => user.email === newUser.email)) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "E-mail already registered",
        showConfirmButton: false,
        timer: 2500,
      });
    } else if (isEmpty(inputError)) {
      const pushUser = { ...newUser };
      delete pushUser.repeatPassword;
      setUsers([...users, pushUser]);
      setCreateUser(false);
      Swal.fire({
        icon: "success",
        title: "Account Created Succesfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className={style.modalContainer} id="staticBackdrop">
      <div className="modal-dialog">
        <div className={`${style.modal} modal-content`}>
          <div className={`${style.modal} modal-header`}>
            <h5 className="modal-title" id="staticBackdropLabel">
              Create Account
            </h5>
            <form>
              <div>
                <label>Email</label>
                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={newUser.email}
                  />
                  {inputError.email && (
                    <p className={style.error}> {inputError.email} </p>
                  )}
                </div>
              </div>
              <div>
                <label>Password</label>
                <div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={newUser.password}
                  />
                  {inputError.password && (
                    <p className={style.error}> {inputError.password} </p>
                  )}
                </div>
              </div>
              <div>
                <label>Repeat Password</label>
                <div>
                  <input
                    type="password"
                    name="repeatPassword"
                    onChange={handleChange}
                    value={newUser.repeatPassword}
                  />
                  {inputError.repeatPassword && (
                    <p className={style.error}> {inputError.repeatPassword} </p>
                  )}
                </div>
              </div>
            </form>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setCreateUser(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
