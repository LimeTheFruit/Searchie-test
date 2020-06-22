import React from 'react'
import {NavLink, Link} from 'react-router-dom'

 const NavBar = () => {
    return (
        <div className = "NavBar">
            <NavLink to = "/" exact = {true}></NavLink>
            <NavLink to = "/Explore" exact = {true}></NavLink>
        </div>
    )
}

export default NavBar;
