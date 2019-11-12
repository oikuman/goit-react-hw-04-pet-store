import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import pets from './pets.json';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import PetsPage from './PetsPage';
import PetPage from './PetPage';

function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <ul className="navList">
          <li className="navItem">
            <Link to="/">Home</Link>
          </li>
          <li className="navItem">
            <Link to="/pets">Pets</Link>
          </li>
          <li className="navItem">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route
          path="/pets/:id"
          render={props => <PetPage {...props} pets={pets} />}
        />
        <Route
          path="/pets"
          render={props => <PetsPage {...props} pets={pets} />}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
