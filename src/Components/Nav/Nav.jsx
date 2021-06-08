import React from "react";
import './Nav.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return(
        <nav className='nav'>
            <li className='nav-item'><NavLink to="/profile" activeClassName='active-link'>Profile</NavLink></li>
            <li className='nav-item'><NavLink to="/dialogs" activeClassName='active-link'>Messages</NavLink></li>
            <li className='nav-item'><NavLink to="/news" activeClassName='active-link'>News</NavLink></li>
            <li className='nav-item'><NavLink to="/music" activeClassName='active-link'>Music</NavLink></li>
            <li className='nav-item'><NavLink to='/settings' activeClassName='active-link'>Settings</NavLink></li>
        </nav>
    )
}

export default Nav