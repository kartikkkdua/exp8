import React, { useState } from 'react';
import { X, Star, Send } from 'lucide-react';
import { Movie, Review } from '../types';

interface MovieDetailProps {
  movie: Movie;
  onClose: () => void;
  onAddReview: (movieId: number, review: Omit<Review, 'id' | 'date'>) => void;
  isDarkMode: boolean;
}

export const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onClose, onAddReview, isDarkMode }) => {
  const [newReview, setNewReview] = useState({
    userName: '',
    rating: 5,
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddReview(movie.id, newReview);
    setNewReview({ userName: '', rating: 5, comment: '' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className={`sticky top-0 p-4 border-b flex justify-between items-center ${
          isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {movie.title}
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

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <img 
              src={movie.posterUrl} 
              alt={movie.title} 
              className="w-full md:w-64 h-96 object-cover rounded-lg"
            />
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {movie.rating.toFixed(1)}
                </span>
              </div>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {movie.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genre.map((g, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Reviews
            </h3>
            <div className="space-y-4">
              {movie.reviews.map((review) => (
                <div key={review.id} className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {review.userName}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {review.rating}
                      </span>
                    </div>
                  </div>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {review.comment}
                  </p>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {review.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Add Review
            </h3>
            <div>
              <label className={`block text-sm font-medium mb-1 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Name
              </label>
              <input
                type="text"
                value={newReview.userName}
                onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
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
                Rating
              </label>
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                className={`w-full px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-1 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Comment
              </label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
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
              <Send className="w-4 h-4 mr-2" />
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};