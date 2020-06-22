import React from 'react';
import {Link} from 'react-router-dom'

 const SearchResult = ({image, name, preparation}) => {

    let destination = `/Explore/${name}`;
    return (
        <div>
            <Link to = {destination}></Link>
            <img src = {image}></img> 
            <input type = "text"></input>
            <button>Search</button>
            <div className = "SeachResults">
                
            </div>
        </div>
    )
}

export default SearchResult;