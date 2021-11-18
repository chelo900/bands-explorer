import style from "./styles/LoginPage.module.css";
import CreateUser from "../Components/CreateUser";
import { useState, useEffect } from "react";

const Login = () => {
  const [createUser, setCreateUser] = useState(false);

  return (
    <div className={style.container}>
      <div className="mb-3 row">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="inputPassword" />
      </div>
      <button type="button" className="btn btn-primary">
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
      {createUser && <CreateUser />}
    </div>
  );
};
export default Login;
