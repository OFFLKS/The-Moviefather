import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/api';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar setFilteredMovies={setFilteredMovies} movies={movies} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
