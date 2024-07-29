import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  LoginPage  from '../LoginPage/LoginPage'
import  MoviesListPage from '../MoviesListPage/MoviesListPage';
import  MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import  ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar';

export default function App() {
  const [user, setUser] = useState();

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <main className="App">
      { user ?
        <>
          <NavBar className="nav-bar"/>
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
        :
        <LoginPage onLogin={handleLogin}/>
      }
    </main>
  );
}
