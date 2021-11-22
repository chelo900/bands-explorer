import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LoginForm from "../Components/LoginForm";

const Login = ({ user, setUser, users, setUsers }) => {
  const navigate = useNavigate();
  const [createUser, setCreateUser] = useState(false);

  useEffect(() => {
    if (user?.loggedIn) {
      navigate("/home");
    }
  }, [user]);

  return (
    <LoginForm
      setCreateUser={setCreateUser}
      createUser={createUser}
      setUser={setUser}
      user={user}
      setUsers={setUsers}
      users={users}
    />
  );
};

export default Login;
