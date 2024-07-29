import { useParams } from 'react-router-dom';
import { movies } from '../../data';

export default function MovieDetailPage() {
  const { movieName } = useParams();
  const movie = movies.find(m => m.title === movieName);

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>Release Date: {movie.releaseDate}</p>
      <img src={movie.posterPath} alt={movie.title} />
      <p>Cast: {movie.cast.join(', ')}</p>
    </div>
  );
}