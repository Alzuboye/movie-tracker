interface MovieCardProps {
  title: string;
  year: number;
  rating: number;
}

const MovieCard = ({ title, year, rating }: MovieCardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{year}</h1>
      <h1>{rating}</h1>
    </div>
  );
};

export default MovieCard;
