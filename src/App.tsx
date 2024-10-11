
  import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login';
import Home from './pages/Home';
import CreateWatchlist from './pages/CreateWatchlist';
import ViewWatchlist from './pages/ViewWatchlist';

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [movies, setMovies] = useState<{ title: string; watched: boolean }[]>([]);

  
  
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://img.freepik.com/free-photo/movie-background-collage_23-2149876028.jpg")',
      }}
    >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={username ? <Navigate to="/home" /> : <LoginPage setUsername={setUsername} />} />
        <Route path="/home" element={username ? <Home username={username} /> : <Navigate to="/" />} />
        <Route path="/create" element={<CreateWatchlist movies={movies} setMovies={setMovies} username={username} />} />
        <Route path="/view" element={<ViewWatchlist movies={movies} setMovies={setMovies} username={username} />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
