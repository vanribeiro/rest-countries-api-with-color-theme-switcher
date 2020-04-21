import React from 'react';
import './../../assets/css/components/search-form.scss'

function SearchBar() {
    return (
        <form className="search-form">
            <div className="container">
                <div className="search-form-row">
                    <div className="input-search">
                        <input type="search" 
                        name="search" 
                        id="search-country"
                        placeholder="Search for country..."
                        />
                    </div>
                    <div className="select-by-region">
                        <select name="filter" id="filter-by-region">
                            <option>Filter By Region</option>
                            <option value="Africa">Africa</option>
                            <option value="America">America</option>
                            <option value="Asia">Asia</option>
                            <option value="America">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SearchBar;