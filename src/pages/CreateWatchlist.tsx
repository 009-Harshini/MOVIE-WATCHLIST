import React, { useState } from 'react';
import NavBar from '../components/NavBar';

type Movie = {
  title: string;
  watched: boolean;
};

const CreateWatchlist: React.FC<{ movies: Movie[]; setMovies: React.Dispatch<React.SetStateAction<Movie[]>>; username: string }> = ({ movies, setMovies, username }) => {
  const [newMovie, setNewMovie] = useState<string>("");

  const addMovie = () => {
    if (newMovie.trim()) {
      setMovies([...movies, { title: newMovie.trim(), watched: false }]);
      setNewMovie("");
    }
  };

  return (
    <div>
      <NavBar username={username} />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-white">Create Watchlist</h1>
        <input
          type="text"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Add a new movie"
          className="border p-2 mr-2"
        />
        <button
          onClick={addMovie}
          className="bg-green-800 text-white px-4 py-2 rounded"
        >
          Add Movie
        </button>
      </div>
    </div>
  );
};

export default CreateWatchlist;
