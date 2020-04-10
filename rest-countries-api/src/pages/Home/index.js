import React from 'react';
import Header from './../../components/Header';
import Card from './../../components/Card';
import SearchBar from './../../components/SearchBar';

import './../../assets/css/main.scss';

function Home() {
    return (
        <div>
            <Header />
            <SearchBar />
            <main className="main">
                <div className="container">
                    <Card 
                        population="206,135,883"
                        region="Americas"
                        capital="Brasília"
                    />
                    <Card 
                        population="206,135,883"
                        region="Americas"
                        capital="Brasília"
                    />
                    <Card 
                        population="206,135,883"
                        region="Americas"
                        capital="Brasília"
                    />
                    <Card 
                        population="206,135,883"
                        region="Americas"
                        capital="Brasília"
                    />
                </div>
            </main>
        </div>
        
    )
}

export default Home;