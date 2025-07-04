import React from 'react';
import playerData from '../data/players';

function Players() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Players</h1>
      <ul className="list-none">
        {playerData.map((player) => (
          <li key={player.id} className="mb-4">
            <h2 className="text-lg font-bold">{player.name}</h2>
            <p className="text-lg">{player.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Players;