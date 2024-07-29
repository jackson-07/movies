import { movies } from "../../data";
import MovieCard from "../../components/MovieCard";

export default function MoviesListPage() {
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard 
          key={movie.title}
          title={movie.title}
          releaseDate={movie.releaseDate}
          posterPath={movie.posterPath}
        />
      ))}
    </div>
  );
}