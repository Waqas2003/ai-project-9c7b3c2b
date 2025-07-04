import React from 'react';
import scheduleData from '../data/schedule';

function Schedule() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Schedule</h1>
      <ul className="list-none">
        {scheduleData.map((match) => (
          <li key={match.id} className="mb-4">
            <h2 className="text-lg font-bold">{match.date}</h2>
            <p className="text-lg">{match.opponent} - {match.venue}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;