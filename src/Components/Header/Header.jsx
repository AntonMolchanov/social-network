import React from "react";
import './Header.css'
import logo from './../../logo.svg';

 const Header = () => {
    return(
        <header className='header'>
            <div className='header-logo'>
                <img src={logo} alt=""/>
            </div>
        </header>
    )
}

export default Header