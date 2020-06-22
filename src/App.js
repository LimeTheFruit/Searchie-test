import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import FrontPage from './components/FrontPage';
import ExplorePage from './components/ExplorePage';
import CocktailInfoPage from './components/CocktailInfoPage';

function App() {
  return (

      <BrowserRouter>
      <div className = "AppDimensions">
        <div className="AppContent">
          <NavBar/>
          <Switch>
            <Route path = "/" component = {FrontPage} exact = {true} />
            <Route path = "/Explore" component = {ExplorePage} exact = {true} />
            <Route path = "/Drinks/:id" component= {CocktailInfoPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
