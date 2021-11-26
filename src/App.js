import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import DetailPage from "./Pages/DetailPage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  const [user, setUser] = React.useState(null);
  const [users, setUsers] = React.useState([
    { email: "user@user.com", password: "user" },
  ]);
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LoginPage
                setUser={setUser}
                user={user}
                setUsers={setUsers}
                users={users}
              />
            }
          />
          {loggedUser ? (
            <Route exact path="/home" element={<HomePage />} />
          ) : (
            <Route exact path="/home" element={<Navigate replace to="/" />} />
          )}
          {loggedUser ? (
            <Route exact path="/home/:id" element={<DetailPage />} />
          ) : (
            <Route
              exact
              path="/home/:id"
              element={<Navigate replace to="/" />}
            />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
