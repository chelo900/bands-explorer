import { useState } from "react";
import Swal from "sweetalert2";
import RegisterForm from "./RegisterForm";
import { validateUser } from "../utils/validateUser";
import style from "./styles/LoginForm.module.css";

const LoginForm = ({ createUser, setCreateUser, setUser, users, setUsers }) => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleLogin = () => {
    if (validateUser(inputValue, users)) {
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
          value={inputValue.email}
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
          value={inputValue.password}
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
        Register
      </button>
      {createUser && (
        <RegisterForm
          setInputValue={setInputValue}
          setCreateUser={setCreateUser}
          setUsers={setUsers}
          users={users}
        />
      )}
    </div>
  );
};

export default LoginForm;
