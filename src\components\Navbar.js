import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between bg-green-500 p-4">
      <h1 className="text-2xl font-bold text-white">
        <Link to="/">Pakistan Cricket Team</Link>
      </h1>
      <ul className="flex justify-between">
        <li className="mr-4">
          <Link to="/players">Players</Link>
        </li>
        <li className="mr-4">
          <Link to="/schedule">Schedule</Link>
        </li>
        <li className="mr-4">
          <Link to="/news">News</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;