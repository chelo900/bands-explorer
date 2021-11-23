import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LoginForm from "../Components/LoginForm";

const Login = ({ setUser, user, setUsers, users }) => {
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
