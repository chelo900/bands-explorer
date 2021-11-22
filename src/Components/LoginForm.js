import { useState } from "react";
import Swal from "sweetalert2";
import CreateUser from "../Components/CreateUser";
import { validate } from "../utils/validate";
import style from "./styles/LoginForm.module.css";

const LoginForm = ({
  createUser,
  setCreateUser,
  user,
  setUser,
  users,
  setUsers,
}) => {
  const [inputValue, setInputValue] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleLogin = () => {
    if (validate(inputValue, users)) {
      setUser({
        email: inputValue.email,
        password: inputValue.password,
        loggedIn: true,
      });
      Swal.fire({
        icon: "success",
        title: "Welcome!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Incorrect email or password",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  return (
    <div className={style.container}>
      <div className="mb-3 row">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={handleChange}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Log in
      </button>
      <div>or</div>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => setCreateUser(true)}
      >
        Create User
      </button>
      {createUser && <CreateUser setCreateUser={setCreateUser} />}
    </div>
  );
};

export default LoginForm;
