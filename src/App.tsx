import Header from './components/Header';
import MovieCard from './components/MovieCard';
import type { Movie } from './types/Movie';

const movies: Movie[] = [
  {
    id: '1',
    title: 'Dune: Part 2',
    year: 2024,
    rating: 8.5,
  },
  {
    id: '2',
    title: 'Spiderman 2',
    year: 2004,
    rating: 7.5,
  },
  {
    id: '3',
    title: 'Avengers: Endgame',
    year: 2019,
    rating: 8.4,
  },
];

function App() {
  return (
    <div>
      <Header />
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
          />
        );
      })}
    </div>
  );
}

export default App;
