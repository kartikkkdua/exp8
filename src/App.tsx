import React, { useState, useEffect } from 'react';
import { Search, SortAsc, SortDesc, Sun, Moon, Plus } from 'lucide-react';
import { MovieCard } from './components/MovieCard';
import { MovieDetail } from './components/MovieDetail';
import { AddMovieModal } from './components/AddMovieModal';
import { initialMovies } from './data';
import { Movie, Review } from './types';

function App() {
  const [movies, setMovies] = useState<Movie[]>(() => {
    const saved = localStorage.getItem('movies');
    return saved ? JSON.parse(saved) : initialMovies;
  });
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [isAddMovieModalOpen, setIsAddMovieModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleAddReview = (movieId: number, review: Omit<Review, 'id' | 'date'>) => {
    setMovies(movies.map(movie => {
      if (movie.id === movieId) {
        const newReview: Review = {
          ...review,
          id: Math.max(0, ...movie.reviews.map(r => r.id)) + 1,
          date: new Date().toISOString().split('T')[0]
        };
        
        const newRating = (movie.rating * movie.reviews.length + review.rating) / (movie.reviews.length + 1);
        
        return {
          ...movie,
          rating: Number(newRating.toFixed(1)),
          reviews: [...movie.reviews, newReview]
        };
      }
      return movie;
    }));
  };

  const handleAddMovie = (newMovie: Omit<Movie, 'id' | 'reviews'>) => {
    const movie: Movie = {
      ...newMovie,
      id: Math.max(0, ...movies.map(m => m.id)) + 1,
      reviews: []
    };
    setMovies([...movies, movie]);
    setIsAddMovieModalOpen(false);
  };

  const filteredMovies = movies
    .filter(movie => 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => 
      sortOrder === 'desc' ? b.rating - a.rating : a.rating - b.rating
    );

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Movie Reviews
          </h1>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="Search movies or genres..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
            
            <button
              onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
                  : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50'
              }`}
            >
              {sortOrder === 'desc' ? (
                <SortDesc className="w-5 h-5" />
              ) : (
                <SortAsc className="w-5 h-5" />
              )}
              <span className="hidden sm:inline">Sort by Rating</span>
            </button>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-white text-gray-900 hover:bg-gray-50'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsAddMovieModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span className="hidden sm:inline">Add Movie</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMovies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelectMovie={setSelectedMovie}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        {selectedMovie && (
          <MovieDetail
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
            onAddReview={handleAddReview}
            isDarkMode={isDarkMode}
          />
        )}

        {isAddMovieModalOpen && (
          <AddMovieModal
            onClose={() => setIsAddMovieModalOpen(false)}
            onAddMovie={handleAddMovie}
            isDarkMode={isDarkMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;