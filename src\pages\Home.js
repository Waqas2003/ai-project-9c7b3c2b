import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Welcome to Pakistan Cricket Team</h1>
      <p className="text-lg">
        The Pakistan cricket team, also known as the Men in Green, represents Pakistan in international cricket.
      </p>
      <p className="text-lg">
        <Link to="/players">Meet our players</Link>
      </p>
    </div>
  );
}

export default Home;