import React from 'react';
import Select from './Select';
import './../../assets/css/components/search-form.scss';

function SearchBar({ handleDynamicSearch }) {

    function filterByRegion (option) {
        console.log(option);
    }
    return (
        <form className="search-form">
            <div className="container">
                <div className="search-form-row">
                    <div className="input-search">
                        <input type="search" 
                        name="search" 
                        id="search-country"
                        placeholder="Search for country..."
                        onKeyUp={handleDynamicSearch}
                        />
                    </div>
                    <Select filter={(option) => filterByRegion(option)} />
                </div>
            </div>
        </form>
    )
}

export default SearchBar;