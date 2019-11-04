import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Portfolio/Portfolio';
import NoMatch from './pages/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Projects" component={Projects} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
