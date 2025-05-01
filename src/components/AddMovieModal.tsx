import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Movie } from '../types';

interface AddMovieModalProps {
  onClose: () => void;
  onAddMovie: (movie: Omit<Movie, 'id' | 'reviews'>) => void;
  isDarkMode: boolean;
}

export const AddMovieModal: React.FC<AddMovieModalProps> = ({ onClose, onAddMovie, isDarkMode }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    posterUrl: '',
    rating: 0,
    releaseYear: new Date().getFullYear(),
    genre: [''],
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddMovie({
      ...newMovie,
      genre: newMovie.genre.filter(g => g.trim() !== '')
    });
  };

  const handleAddGenre = () => {
    setNewMovie({
      ...newMovie,
      genre: [...newMovie.genre, '']
    });
  };

  const handleGenreChange = (index: number, value: string) => {
    const newGenres = [...newMovie.genre];
    newGenres[index] = value;
    setNewMovie({
      ...newMovie,
      genre: newGenres
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className={`sticky top-0 p-4 border-b flex justify-between items-center ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Add New Movie
          </h2>
          <button 
            onClick={onClose}
            className={`p-2 rounded-full ${
              isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Title
            </label>
            <input
              type="text"
              value={newMovie.title}
              onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
              className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              required
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Poster URL
            </label>
            <input
              type="url"
              value={newMovie.posterUrl}
              onChange={(e) => setNewMovie({ ...newMovie, posterUrl: e.target.value })}
              className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Rating
              </label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={newMovie.rating}
                onChange={(e) => setNewMovie({ ...newMovie, rating: Number(e.target.value) })}
                className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
                required
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Release Year
              </label>
              <input
                type="number"
                min="1900"
                max={new Date().getFullYear()}
                value={newMovie.releaseYear}
                onChange={(e) => setNewMovie({ ...newMovie, releaseYear: Number(e.target.value) })}
                className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
                required
              />
            </div>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Genres
            </label>
            {newMovie.genre.map((genre, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={genre}
                  onChange={(e) => handleGenreChange(index, e.target.value)}
                  className={`flex-1 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter genre"
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddGenre}
              className="flex items-center text-sm text-blue-500 hover:text-blue-600"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Genre
            </button>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-1 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Description
            </label>
            <textarea
              value={newMovie.description}
              onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
              className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};