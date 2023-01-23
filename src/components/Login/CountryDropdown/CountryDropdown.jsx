import React, { useState, useEffect } from 'react';
import './CountryDropdown.scss';

const CountryDropdown = ({selected}) => {

    const [ countries, setCountries ] = useState([]);
    const [ selectedCountry, setSelectedCountry ] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://restcountries.com/v2/all');
            const data = await response.json();
            setCountries(data);
        }
        fetchData();
    }, []);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        selected(event.target.value);
    };

    return (
        <div>
            <label htmlFor="country">País : </label>
            <select className='countryDropdown' value={selectedCountry} onChange={handleCountryChange}>
                {countries.map((country) => (
                    <option key={country.alpha2Code} value={country.name}>
                        {country.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CountryDropdown;