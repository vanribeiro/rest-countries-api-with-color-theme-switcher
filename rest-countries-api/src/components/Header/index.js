import React from 'react';
import { Link } from 'react-router-dom';
import SwitcherButton from './../SwitcherButton';
import './../../assets/css/components/header.scss';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <div className="title-page">
                        <Link to="/">
                            <h1>Where in the World?</h1>
                        </Link>
                    </div>
                    <SwitcherButton />
                </div>
            </div>
        </header>
    );
}

export default Header;