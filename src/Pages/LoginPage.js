import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LoginForm from "../Components/LoginForm";
import style from "./styles/LoginPage.module.css";

const Login = ({ setUser, user, setUsers, users }) => {
  const navigate = useNavigate();
  const [createUser, setCreateUser] = useState(false);
  const loggedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (loggedUser) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div className={style.container}>
      <h1>BANDS EXPLORER</h1>
      <h3>By Marcelo Nieto</h3>
      <LoginForm
        setCreateUser={setCreateUser}
        createUser={createUser}
        setUser={setUser}
        user={user}
        setUsers={setUsers}
        users={users}
      />
    </div>
  );
};

export default Login;
