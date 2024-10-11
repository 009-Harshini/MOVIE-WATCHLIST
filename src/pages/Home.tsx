import React from 'react';
import NavBar from '../components/NavBar';

interface HomeProps {
  username: string;
}

const Home: React.FC<HomeProps> = ({ username }) => {
  return (
    <div>
      <NavBar username={username} />
      <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-white leading-tight">Welcome, {username}!</h1>
      <p className="text-lg text-white leading-relaxed"><br /><br/>
        This is your movie watchlist application. Enjoy creating and viewing your favorite movies!
      </p>
      </div>
    </div>
  );
};

export default Home;
