import React from 'react';

function SearchBar() {
    return (
        <form className="search-form">
            <div className="container">
            <div className="input-search">
                <input type="search" name="search" id="search-country"/>
            </div>
            <div className>
                <select name="filter" id="filter-by-region">
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="America">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            </div>
        </form>
    )
}

export default SearchBar;