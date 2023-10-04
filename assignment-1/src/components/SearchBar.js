import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input className="search-input" type="text" placeholder="Search cars" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
export default SearchBar;