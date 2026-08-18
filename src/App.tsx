// Components
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
// Types
import type { Movie } from './types/Movie';
// CSS
import './App.css';
// Hooks
import { useState } from 'react';

const movies: Movie[] = [
  {
    id: '1',
    title: 'Dune: Part 2',
    year: 2024,
    rating: 8.5,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: '2',
    title: 'Spiderman 2',
    year: 2004,
    rating: 7.5,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNGQ0YTQyYTgtNWI2YS00NTE2LWJmNDItNTFlMTUwNmFlZTM0XkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: '3',
    title: 'Avengers: Endgame',
    year: 2019,
    rating: 8.4,
    poster:
      'https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_1024x1024.jpg?v=1762485782',
  },
];

function App() {
  const [search, setSearch] = useState('');
  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="app">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <div className="movie-list">
        {filteredMovies.length === 0 ? (
          <p>No movies found</p>
        ) : (
          filteredMovies.map((movie) => {
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
