import React from 'react';

import './../../assets/css/components/card.scss';

function Card(props){
    return (
        <section className="card">
            <header className="header-title">
                <h1>Brasil</h1>
            </header>
            <main className="card-content">
                <p>
                    <strong>Population: </strong>
                    <span>{props.population}</span>
                </p>
                <p>
                    <strong>Region: </strong>
                    <span>{props.region}</span>
                </p>
                <p>
                    <strong>Capital: </strong>
                    <span>{props.capital}</span>
                </p>
            </main>
        </section>
    )
}

export default Card;