import React, { useState, useEffect } from 'react';
import Header from './../../components/Header';
import Card from './../../components/Card';
import SearchBar from './../../components/SearchBar';
import URL from './../../service/api';
import './index.scss';

function Home() {
    const [countries, setCountries] = useState([]);
    // function findAll () {
    //     fetch(`${URL}/all`)
    //         .then(async (response) => {
    //             const data = await response.json();
    //             setCountries(data);
    //         });
    // }

    function findByRegion(event) {
        console.log(event)
    }


    useEffect(() => {
        // findAll();
    }, []);
    
    return (
        <div>
            <Header />
            <SearchBar onChange={findByRegion}/>
            <main className="main__countries">
                <div className="container">
                    {
                        countries.map((country) => (
                            <Card key={country.name}
                                countryFlag={country.flag}
                                countryName={country.name}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                            />
                        ))
                    }
                </div>
            </main>
        </div>
        
    )
}

export default Home;