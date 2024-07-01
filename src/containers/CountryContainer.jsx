import React, { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [filter, setFilter] = useState('');


    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        loadCountries();
    }, []);

    const moveCountryToVisitedList = (country) => {
        setVisitedCountries([...visitedCountries, country])
    }

    const removeCountryFromVisitedList = (country) => {
        setVisitedCountries(visitedCountries.filter(c => c !== country));
    }
 
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    const filteredCountries = countries
        .filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => a.name.common.localeCompare(b.name.common));

    const sortedVisitedCountries = visitedCountries
    .sort((a, b) => a.name.common.localeCompare(b.name.common));


    return (
        <div className="container">
        <div className="bucket-list">
            <h2>Countries</h2>
            <input 
                    type="text" 
                    placeholder="Filter countries..." 
                    value={filter} 
                    onChange={handleFilterChange} 
                />
                <CountryList countries={filteredCountries} moveCountryToVisitedList={moveCountryToVisitedList} />
        </div>
        <div className="visited-list">
            <h2>Visited Countries</h2>
            <CountryList countries={sortedVisitedCountries} removeCountryFromVisitedList={removeCountryFromVisitedList} />
        </div>
    </div>
    );
}

export default CountryContainer;