import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import FrontPage from './components/FrontPage';
import ExplorePage from './components/ExplorePage';
import CocktailInfoPage from './components/CocktailInfoPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <div>
      <NavBar/>
      <Switch>
        <Route path = "/" exact = {true}>
          <FrontPage/>
        </Route>
        <Route path = "/Explore" exact = {true}>
          <ExplorePage/>
        </Route>
        <Route path = "/Explore/:id" component= {CocktailInfoPage} >
         
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
