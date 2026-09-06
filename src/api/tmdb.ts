import type { Movie } from '../types/Movie';

const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

interface TMDBMovie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string | null;
  vote_count: number;
}

interface TMDBMovieResponse {
  results: TMDBMovie[];
}

export const getPopularMovies = async () => {
  const response = await fetch(`${TMDB_BASE_URL}/movie/popular`, {
    headers: { Authorization: `Bearer ${TMDB_ACCESS_TOKEN}` },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch popular movies');
  }
  const data: TMDBMovieResponse = await response.json();
  return data.results.map(mapTMDBMovie);
};

export const searchMovies = async (query: string) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(query.trim())}`,
    {
      headers: { Authorization: `Bearer ${TMDB_ACCESS_TOKEN}` },
    },
  );
  if (!response.ok) {
    throw new Error('Failed to search movies');
  }
  const data: TMDBMovieResponse = await response.json();
  return data.results.map(mapTMDBMovie);
};

const mapTMDBMovie = (movie: TMDBMovie): Movie => {
  return {
    id: movie.id,
    title: movie.title,
    year: movie.release_date ? Number(movie.release_date.slice(0, 4)) : null,
    rating: movie.vote_count === 0 ? null : movie.vote_average,
    poster: movie.poster_path
      ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
      : '',
  };
};
