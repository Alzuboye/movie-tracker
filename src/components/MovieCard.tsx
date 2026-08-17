import './MovieCard.css';

interface MovieCardProps {
  title: string;
  year: number;
  rating: number;
  poster: string;
}

const MovieCard = ({ title, year, rating, poster }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <div className="movie-text">
        <h2>{title}</h2>
        <div className="movie-info">
          <p>{year}</p>
          <p className="rating-style"> ★ {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
