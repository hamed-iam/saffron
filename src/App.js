import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CryptoPage from './pages/Crypto';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{ theme: 'dark' }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/crypto">
              <CryptoPage />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
