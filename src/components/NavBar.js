import React from 'react'
import {NavLink} from 'react-router-dom'

 const NavBar = () => {
    return (
        <div className = "NavBar">
            <NavLink className = "NavLink" to = "/" exact = {true}>Home</NavLink>
            <NavLink className = "NavLink" to = "/Explore" exact = {true}>Explore</NavLink>
        </div>
    )
}

export default NavBar;
