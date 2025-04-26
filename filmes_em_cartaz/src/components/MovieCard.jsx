import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold">{movie.title}</h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{movie.vote_average}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
