import React, { useState } from 'react';

const SearchBar = ({ setFilteredMovies, movies }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = movies.filter(movie => 
      movie.title.toLowerCase().includes(term)
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Buscar filmes..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border rounded-lg"
      />
    </div>
  );
};

export default SearchBar;
