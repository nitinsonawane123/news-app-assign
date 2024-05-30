import React, { useState } from 'react';

const countryOptions = ["in", "us", "gb", "ca", "au"]; 
const categoryOptions = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

const SearchForm = ({ onSearch }) => {
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  

  const handleSearch = () => {
    onSearch(country, category);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-md-center">
        <div className="col-md-3">
          <select className="form-control" onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select Country</option>
            {countryOptions.map((country) => (
              <option key={country} value={country}>
                {country.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-control" onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
