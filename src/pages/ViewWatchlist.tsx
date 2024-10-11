import React from 'react';
import NavBar from '../components/NavBar';

type Movie = {
  title: string;
  watched: boolean;
};

const ViewWatchlist: React.FC<{ movies: Movie[]; setMovies: React.Dispatch<React.SetStateAction<Movie[]>>; username: string }> = ({ movies, setMovies, username }) => {
  const toggleWatched = (index: number) => {
    const updatedMovies = movies.map((movie, i) =>
      i === index ? { ...movie, watched: !movie.watched } : movie
    );
    setMovies(updatedMovies);
  };

  const deleteMovie = (index: number) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
  };

  return (
    <div>
      <NavBar username={username} />
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-bold text-white">Your Watchlist<br /><br/></h1>
        <ul>
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <li key={index} className="flex justify-between p-4 border-b bg-gray-100 rounded mb-2">
                <span className={movie.watched ? "line-through text-gray-500" : ""}>{movie.title}</span>
                <div>
                  <button
                    onClick={() => toggleWatched(index)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    {movie.watched ? "Unwatch" : "Watch"}
                  </button>
                  <button
                    onClick={() => deleteMovie(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p  className="text-3xl font-bold text-white">No movies in your watchlist.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ViewWatchlist;
