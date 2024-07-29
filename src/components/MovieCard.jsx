import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ title, releaseDate, posterPath }) {
  return (
    <Link to={`/movies/${title}`}>
      <div className="movie-card" style={{backgroundImage: `url(${posterPath})`}}>
        <h3>{title}</h3>
        <p>{releaseDate}</p>
      </div>
    </Link>
  );
}
