import React from 'react';
import {Link} from 'react-router-dom'

 const SearchResult = ({image, name, preparation}) => {

    let destination = `/Explore/${name}`;
    return (
        <div className = "SearchItem">
            <Link className = "SearchItemLink" to = {destination}>{name}</Link>
            <img src = {image} alt = "ImageOfCocktail"></img> 
           
        </div>
    )
}

export default SearchResult;