// Components
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import SortSelect from './components/SortSelect';
// Types
import type { Movie } from './types/Movie';
import type { SortBy } from './types/SortBy';
// CSS
import './App.css';
// Hooks
import { useState, useEffect } from 'react';
// API
import { getPopularMovies, searchMovies } from './api/tmdb';

function App() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('rating');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchedMovies = async () => {
      try {
        const fetchedMoviesResult = await getPopularMovies();
        setMovies(fetchedMoviesResult);
      } catch {
        setError('Failed to load movies');
      } finally {
        setLoading(false);
      }
    };
    fetchedMovies();
  }, []);
  const handleSearch = async (query: string) => {
    setError(null);
    setLoading(true);
    try {
      if (query.trim() === '') {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } else {
        const searchedMoviesResult = await searchMovies(query);
        setMovies(searchedMoviesResult);
      }
    } catch {
      setError('Failed to search movies');
    } finally {
      setLoading(false);
    }
  };
  const sortedMovies = [...movies].sort((a, b) => {
    if (sortBy === 'rating') {
      if (a.rating === null && b.rating === null) {
        return 0;
      }
      if (a.rating === null) {
        return 1;
      }
      if (b.rating === null) {
        return -1;
      }
      return b.rating - a.rating;
    } else if (sortBy === 'year') {
      if (a.year === null && b.year === null) {
        return 0;
      }
      if (a.year === null) {
        return 1;
      }
      if (b.year === null) {
        return -1;
      }
      return b.year - a.year;
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else {
      return 0;
    }
  });
  return (
    <div className="app">
      <Header />
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <SortSelect sortBy={sortBy} setSortBy={setSortBy}></SortSelect>
      <div className="movie-list">
        {loading ? (
          <p>Loading movies</p>
        ) : error ? (
          <p> {error} </p>
        ) : sortedMovies.length === 0 ? (
          <p>No movies found</p>
        ) : (
          sortedMovies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
                poster={movie.poster}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
export default App;
