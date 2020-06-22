import React from 'react';
import './App.css';
import Drinks from './data/drinks.json'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path = "/" exact = {true}>

        </Route>
        <Route path = "/Explore" exact = {true}>

        </Route>
        <Route path = "/Explore/:id" exact = {true}>

        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
