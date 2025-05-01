import React from 'react';
import { Star, Clock, Tag } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onSelectMovie: (movie: Movie) => void;
  isDarkMode: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onSelectMovie, isDarkMode }) => {
  return (
    <div 
      className={`rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
      onClick={() => onSelectMovie(movie)}
    >
      <div className="relative">
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          className="w-full h-64 object-cover"
        />
        {movie.rating >= 4.5 && (
          <div className="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 rounded-bl-lg">
            Top Rated
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {movie.title}
        </h3>
        <div className={`flex items-center gap-4 mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span>{movie.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{movie.releaseYear}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {movie.genre.map((g, index) => (
            <span 
              key={index}
              className={`flex items-center text-sm px-2 py-1 rounded ${
                isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Tag className="w-3 h-3 mr-1" />
              {g}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};