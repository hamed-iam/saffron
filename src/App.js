import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
