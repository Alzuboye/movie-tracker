import './MovieCard.css';

interface MovieCardProps {
  title: string;
  year: number | null;
  rating: number | null;
  poster: string;
}

const MovieCard = ({ title, year, rating, poster }: MovieCardProps) => {
  return (
    <div className="movie-card">
      {poster ? <img src={poster} alt={title} /> : <p>No poster found</p>}
      <div className="movie-text">
        <h2>{title}</h2>
        <div className="movie-info">
          {year !== null ? <p>{year}</p> : <p>Release year not found</p>}
          <p className="rating-style">
            {' '}
            {rating !== null ? `★ ${rating.toFixed(1)}` : 'No rating'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
