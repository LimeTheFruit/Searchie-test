import React, {useState} from 'react';
import SearchResultItem from './SearchResultItem';
import Drinks from '../data/drinks.json'

let cocktails = Drinks.cocktails;

 const ExplorePage = () => {

    const [cocktailsShown, setCocktailsShown] = useState([]);

    const search = () => {
        let searchText = document.getElementsByTagName("input")[0].value.toLowerCase();
        let filteredCocktails = cocktails.filter(i => i.name.toLowerCase().includes(searchText));
        let newShow = filteredCocktails.map(i => <SearchResultItem key = {i.name} image = {i.image} name = {i.name}/>);
        setCocktailsShown(newShow);
    }

    return (
        <React.Fragment>
            <h1>Find your favorite drink!</h1> 
            <div>
                <input type = "text"></input>
                <button onClick = {search}>Search</button>
            </div>

            <div className = "SearchResults">
                {cocktailsShown < 1 ? <p>No results</p> : cocktailsShown} 
            
            </div>
        </React.Fragment>
    )
}

export default ExplorePage;