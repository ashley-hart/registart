// React allows us to use JSX to write "HTML" in a JS setting.
// React.createElement(blahblahblah) <-- saves you from a
// lot of these
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Editor from "./pages/editor";
import Contact from "./pages/contact";
import SignIn from "./pages/signin";

// import Form from './apptForm';

function App() {
  // {}? --> Javascript other wise HTML.
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/editor" exact component={Editor} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/signin" exact component={SignIn} />
        </Switch>
      </Router>
    </div>

    // TODO: Add footer.
  );
}

// Export this file.
export default App;
