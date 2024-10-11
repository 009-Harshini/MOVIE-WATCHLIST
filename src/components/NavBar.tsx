import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC<{ username: string }> = ({ username }) => {
  return (
    <nav className="bg-red-500 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-xl">Welcome, {username}</h1>
        <div>
          <Link to="/" className="text-white px-4">Home</Link>
          <Link to="/create" className="text-white px-4">Create</Link>
          <Link to="/view" className="text-white px-4">View</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
