import React from 'react'
import { Link } from 'react-router-dom';

import "../style/header.css";

const Header = () => {
    return (
        <header className='header'>
            <h3>Contact App</h3>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/add'><li>AddContact</li></Link>
            </ul>
        </header>
    )
}

export default Header