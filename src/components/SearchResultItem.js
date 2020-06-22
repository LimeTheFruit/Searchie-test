import React from 'react';
import {Link} from 'react-router-dom'

 const SearchResultItem = ({image, name}) => {

    let destination = `/Drinks/${name}`;

    return (
        <div className = "SearchItem">
            <Link className = "SearchItemLink" to = {destination}>{name}</Link>
            <img src = {image} alt = "ImageOfCocktail"></img> 
        </div>
    )
}

export default SearchResultItem;