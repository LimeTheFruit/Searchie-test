import React from 'react';
import Drinks from '../data/drinks.json';

 const CocktailInfoPage = (props) => {

    let cocktails = Drinks.cocktails;
    let cocktail = cocktails.filter(i => i.name === props.match.params.id);

    return (
        <React.Fragment>
        <h2>{cocktail[0].name}</h2>
        <p>{cocktail[0].preparation}</p>
        <img src = {cocktail[0].image} alt = "CocktailImage"></img>
        </React.Fragment>
    )
}

export default CocktailInfoPage;