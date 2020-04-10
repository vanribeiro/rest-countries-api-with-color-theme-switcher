import React from 'react';
import countryFlag from './../../assets/images/Brasil.svg';
import './../../assets/css/components/card.scss';

function Card(props){
    return (
        <section className="card">
        <figure>
            <img className="img-fluid" src={countryFlag} alt="Brasil"/>
        </figure>
            <main className="card-content">
                <header className="header-title">
                    <h3>Brasil</h3>
                </header>
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