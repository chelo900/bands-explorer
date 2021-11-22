import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import BandsPage from "./Pages/BandsPage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  const [user, setUser] = React.useState({ loggedIn: false });
  const [users, setUsers] = React.useState([
    { email: "user@user", password: "user" },
  ]);

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
          <Route exact path="/home" element={<BandsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
