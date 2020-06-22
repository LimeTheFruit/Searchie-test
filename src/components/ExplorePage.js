import React, {useState} from 'react';
import SearchResult from './SearchResult';
import Drinks from '../data/drinks.json'

let cocktails = Drinks.cocktails;

 const ExplorePage = () => {

    const [cocktailsShown, setCockTailsShown] = useState([]);

    const search = () =>{
        let searchText = document.getElementsByTagName("input")[0].value;
        let filteredCocktails = cocktails.filter(i => i.name.includes(searchText));
        setCockTailsShown(filteredCocktails);
    }

    return (
        <React.Fragment>
            <h1>Find your favorite drink!</h1> 
            <div>
            <input type = "text"></input>
            <button onClick = {search}>Search</button>
            </div>

            <div className = "SearchResults">
                {cocktailsShown.length > 1 ? 
                    cocktailsShown.map(i => {
                    return <SearchResult image = {i.image} name = {i.name}/>
                    }) : 
                    <p>No results...</p>  } 
            
            </div>
        </React.Fragment>
    )
}

export default ExplorePage;