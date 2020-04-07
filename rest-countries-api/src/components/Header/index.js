import React from 'react';
import { Link } from 'react-router-dom';
import './../../assets/css/components/header.scss';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="title-page">
                <Link to="/">
                    <h1>Where in the World?</h1>
                </Link>
                    
                </div>
                <div className="switcher-button">
                    <input type="checkbox" name="switcher" id="switcher-btn"/>
                    <label htmlFor="switcher-btn">
                    <ion-icon name="moon-outline"></ion-icon>
                        Dark Mode
                    </label>
                </div>
            </div>
        </header>
    );
}

export default Header;