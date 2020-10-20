// React allows us to use JSX to write "HTML" in a JS setting.
// React.createElement(blahblahblah) <-- saves you from a 
// lot of these
import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Editor from './pages/editor';
import Contact from './pages/contact';

// import Form from './apptForm';

function App() {

  // {}? --> Javascript other wise HTML.
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/editor" exact component={Editor} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
    </Router>
  );
}

// Export this file.
export default App;
