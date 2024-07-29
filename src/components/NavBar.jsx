import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Movies</Link></li>
        <li><Link to="/actors">Actors</Link></li>
      </ul>
    </nav>
  );
}