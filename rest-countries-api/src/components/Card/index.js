import React from 'react';
// import countryFlag from './../../assets/images/Brasil.svg';
import './../../assets/css/components/card.scss';

function Card({
    population, region, capital, countryName, countryFlag
}){
    return (
        <section className="card">
        <figure>
            <img className="img-fluid" src={countryFlag} alt={`${countryName} flag`}/>
        </figure>
            <main className="card-content">
                <header className="header-title">
                    <h3>{countryName}</h3>
                </header>
                <p>
                    <strong>Population: </strong>
                    <span>{population}</span>
                </p>
                <p>
                    <strong>Region: </strong>
                    <span>{region}</span>
                </p>
                <p>
                    <strong>Capital: </strong>
                    <span>{capital}</span>
                </p>
            </main>
        </section>
    )
}

export default Card;