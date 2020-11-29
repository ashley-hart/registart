// React allows us to use JSX to write "HTML" in a JS setting.
// React.createElement(blahblahblah) <-- saves you from a
// lot of these
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Editor from "./pages/editor";
import Contact from "./pages/contact";
import SignIn from "./pages/signin";
import RetCode from "./pages/retcode";
import UserContext from "./components/Context/UserContext";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  // When the app starts, check if there is a user token in local storage.
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");

      // When we initally use this website the token will be null.
      // We stave off errors by sending an empty string to the backend.
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:5000/signin/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        // Get info of currently logged in user.
        const userRes = await axios.get(
          "http://localhost:5000/signin/loggedin",
          {
            headers: { "x-auth-token": token },
          }
        );
        setUserData({
          token,
          user: userRes.data,
        });
      }
      console.log("Logged in user detected: " + tokenRes.data);
    };

    checkLoggedIn();
  }, []);

  return (
    <div className="bghelper">
      <div className="App">
        <Router>
          <UserContext.Provider value={{ userData, setUserData }}>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/editor" exact component={Editor} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/signin" exact component={SignIn} />
              <Route path="/retcode" exact component={RetCode} />
            </Switch>
            {/* <Footer /> */}
          </UserContext.Provider>
        </Router>
      </div>
    </div>

    // TODO: Add footer.
  );
}

export default App;
